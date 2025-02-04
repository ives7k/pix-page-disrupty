import React, { useState } from 'react';
import Layout from './components/Layout';
import { Truck, Store, MapPin } from 'lucide-react';

interface FifteenthPageProps {
  onNext: () => void;
}

function FifteenthPage({ onNext }: FifteenthPageProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleMethodChange = (method: string) => {
    setSelectedMethod(method);
  };

  return (
    <Layout>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Método de Entrega
          </h2>
          <p className="text-gray-600 mb-6">
            Escolha como você deseja receber seu novo cartão
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <div onClick={() => handleMethodChange('correios')} className={`bg-gray-100 p-6 rounded-lg text-center border-2 ${selectedMethod === 'correios' ? 'border-[#ff4d2d]' : 'border-transparent'}`}>
            <div className="flex justify-center mb-4">
              <Truck className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Entrega pelos Correios</h3>
            <p className="text-gray-600">Receba seu cartão no conforto da sua casa em até 1 dia útil</p>
            <button onClick={() => {handleMethodChange('correios'); onNext();}} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f] mt-4">
              Prefiro receber pelos Correios
            </button>
          </div>
          <div onClick={() => handleMethodChange('agencia')} className={`bg-gray-100 p-6 rounded-lg text-center border-2 ${selectedMethod === 'agencia' ? 'border-[#ff4d2d]' : 'border-transparent'}`}>
            <div className="flex justify-center mb-4">
              <Store className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Retirada em Agência</h3>
            <p className="text-gray-600">Retire seu cartão em uma de nossas agências Shopee</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-left">
            <h3 className="text-xl font-bold mb-2">Nossas Agências Shopee Bank</h3>
            <p className="text-gray-600 mb-2">Agência Central</p>
            <p className="text-gray-600 mb-2">Avenida Paulista, 1230</p>
            <p className="text-gray-600 mb-2">Conj 612 a 1510 Lado Par</p>
            <p className="text-gray-600 mb-2">Bela Vista, Sao Paulo - SP</p>
            <p className="text-gray-600 mb-2">01.310-100</p>
            <div className="flex justify-center mt-4">
              <MapPin className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default FifteenthPage;

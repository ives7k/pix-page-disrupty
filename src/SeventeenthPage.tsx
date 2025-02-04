import React, { useState } from 'react';
import Layout from './components/Layout';
import { Box, Truck, Mail } from 'lucide-react';

interface SeventeenthPageProps {
  onNext: () => void;
}

function SeventeenthPage({ onNext }: SeventeenthPageProps) {
  const shippingOptions = [
    { id: 1, name: 'SEDEX', days: '1 dia útil', price: 'R$ 34,90', icon: <Box className="w-6 h-6 text-gray-600" /> },
    { id: 2, name: 'EXPRESS', days: '5 dias úteis', price: 'R$ 29,58', icon: <Truck className="w-6 h-6 text-gray-600" /> },
    { id: 3, name: 'PAC', days: '10 dias úteis', price: 'R$ 27,97', icon: <Mail className="w-6 h-6 text-gray-600" /> },
  ];

  const [selectedShipping, setSelectedShipping] = useState<number | null>(null);

  const handleShippingChange = (id: number) => {
    setSelectedShipping(id);
  };

  const handleContinue = () => {
    if (selectedShipping) {
      const selectedOption = shippingOptions.find(option => option.id === selectedShipping);
      if (selectedOption) {
        localStorage.setItem('shippingMethod', JSON.stringify({
          id: selectedOption.id,
          name: selectedOption.name,
          days: selectedOption.days,
          price: selectedOption.price
        }));
      }
      onNext();
    }
  };

  return (
    <Layout>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Escolha o método de envio
          </h2>
          <p className="text-gray-600 mb-6">
            Agora basta escolher uma forma de envio do seu Cartão de Crédito APROVADO
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {shippingOptions.map((option) => (
            <div key={option.id} onClick={() => handleShippingChange(option.id)} className={`bg-gray-100 p-6 rounded-lg flex items-center justify-between cursor-pointer border-2 ${selectedShipping === option.id ? 'border-[#ff4d2d]' : 'border-gray-200'}`}>
              <div className="flex items-center gap-4">
                {option.icon}
                <div>
                  <p className="text-gray-800 font-bold">{option.name}</p>
                  <p className="text-gray-600 text-sm">{option.days}</p>
                </div>
              </div>
              <p className="text-gray-800 font-bold">{option.price}</p>
            </div>
          ))}
          <button onClick={handleContinue} disabled={selectedShipping === null} className={`w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f] mt-4 ${selectedShipping === null ? 'opacity-50 cursor-not-allowed' : ''}`}>
            Continuar
          </button>
        </div>
    </Layout>
  );
}

export default SeventeenthPage;

import React from 'react';

interface ThirteenthPageProps {
  onNext: () => void;
}

function ThirteenthPage({ onNext }: ThirteenthPageProps) {
  return (
    <div className="max-w-md px-4 py-8 flex-1 w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Escolha a melhor data
          </h2>
          <p className="text-gray-600 mb-6">
            Selecione o melhor dia para o vencimento da sua fatura
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Dia 5
          </button>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Dia 10
          </button>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Dia 15
          </button>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Dia 25
          </button>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Dia 30
          </button>
        </div>
    </div>
  );
}

export default ThirteenthPage;

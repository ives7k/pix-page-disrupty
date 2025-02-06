import React from 'react';

interface SixthPageProps {
  onNext: () => void;
}

function SixthPage({ onNext }: SixthPageProps) {
  return (
    <div className="max-w-md px-4 py-8 flex-1 w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Qual é o seu interesse com um cartão de crédito hoje?
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Fazer uma compra específica
          </button>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Fazer uma viagem
          </button>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Poder gastar mais
          </button>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Organizar a minha vida financeira
          </button>
           <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Outros
          </button>
        </div>
    </div>
  );
}

export default SixthPage;

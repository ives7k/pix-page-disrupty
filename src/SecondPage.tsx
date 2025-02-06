import React from 'react';
import { DollarSign, Rocket, MinusCircle, Calendar } from 'lucide-react';

interface SecondPageProps {
  onNext: () => void;
}

function SecondPage({ onNext }: SecondPageProps) {
  return (
    <div className="max-w-md px-4 py-8 flex-1 w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            O que é mais importante para você em um cartão de crédito?
          </h2>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4">
          <button onClick={onNext} className="bg-white border border-[#ff4d2d] rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100 aspect-square">
            <DollarSign className="w-8 h-8 mb-2 text-[#ff4d2d]" />
            <span className="font-bold">Limite alto</span>
          </button>
          <button onClick={onNext} className="bg-white border border-[#ff4d2d] rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100 aspect-square">
            <Rocket className="w-8 h-8 mb-2 text-[#ff4d2d]" />
            <span className="font-bold">Crédito imediato</span>
          </button>
          <button onClick={onNext} className="bg-white border border-[#ff4d2d] rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100 aspect-square">
            <MinusCircle className="w-8 h-8 mb-2 text-[#ff4d2d]" />
            <span className="font-bold text-center">Não consultar SPC/Serasa</span>
          </button>
          <button onClick={onNext} className="bg-white border border-[#ff4d2d] rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100 aspect-square">
            <Calendar className="w-8 h-8 mb-2 text-[#ff4d2d]" />
            <span className="font-bold">Sem anuidade</span>
          </button>
        </div>
    </div>
  );
}

export default SecondPage;

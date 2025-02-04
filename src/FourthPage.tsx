import React from 'react';
import Layout from './components/Layout';

interface FourthPageProps {
  onNext: () => void;
}

function FourthPage({ onNext }: FourthPageProps) {
  return (
    <Layout>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Qual é a sua Renda Mensal?
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Até R$ 1.000
          </button>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Entre R$ 1.000 e R$ 2.000
          </button>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Entre R$ 2.000 e R$ 4.000
          </button>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Acima de R$ 4.000
          </button>
        </div>
    </Layout>
  );
}

export default FourthPage;

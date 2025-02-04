import React from 'react';
import Layout from './components/Layout';

interface FifthPageProps {
  onNext: () => void;
  onBack: () => void;
}

function FifthPage({ onNext, onBack }: FifthPageProps) {
  return (
    <Layout>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Você está negativado?
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Sim!
          </button>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Não!
          </button>
        </div>
    </Layout>
  );
}

export default FifthPage;

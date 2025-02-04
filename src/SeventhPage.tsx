import React from 'react';
import { CheckCircle } from 'lucide-react';
import Layout from './components/Layout';

interface SeventhPageProps {
  onNext: () => void;
}

function SeventhPage({ onNext }: SeventhPageProps) {
  return (
    <Layout>
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500 bg-green-100 rounded-full p-2" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            Temos um cartão perfeito para você!
          </h2>
          <p className="text-gray-600 mb-6">
            Conclua seu cadastro e faça seu cartão de crédito agora!
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Continuar
          </button>
        </div>
    </Layout>
  );
}

export default SeventhPage;

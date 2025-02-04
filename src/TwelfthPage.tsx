import React from 'react';
import Layout from './components/Layout';

interface TwelfthPageProps {
  onNext: () => void;
}

function TwelfthPage({ onNext }: TwelfthPageProps) {
  return (
    <Layout>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Entenda como funciona seu limite
          </h2>
          <p className="text-gray-600 mb-6">
            Saiba como seu limite de crédito pode aumentar ou diminuir
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <div className="bg-green-100 p-6 rounded-lg text-left">
            <h3 className="text-xl font-bold mb-2">Aumento de Limite</h3>
            <p className="text-gray-600">Caso você realize o pagamento das faturas em dia, seu limite será aumentado constantemente.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg text-left">
            <h3 className="text-xl font-bold mb-2">Redução de Limite</h3>
            <p className="text-gray-600">No entanto, se houver atraso no pagamento das faturas, o limite poderá ser reduzido.</p>
          </div>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Concordo
          </button>
        </div>
    </Layout>
  );
}

export default TwelfthPage;

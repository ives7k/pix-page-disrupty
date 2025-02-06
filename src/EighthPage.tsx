import React from 'react';
import { Shield, Database, Home } from 'lucide-react';

interface EighthPageProps {
  onNext: () => void;
}

function EighthPage({ onNext }: EighthPageProps) {
  return (
    <div className="max-w-md px-4 py-8 flex-1 w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Conta digital e cartão de crédito
          </h2>
           <p className="text-gray-600 mb-6">
            Tudo o que você precisa em um só lugar
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
            <Shield className="w-6 h-6 text-gray-600 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Crédito sujeito à análise e aprovação.</p>
            </div>
          </div>
           <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
            <Database className="w-6 h-6 text-gray-600 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Os dados fornecidos por você a seguir serão utilizados para o processo de aquisição do cartão de crédito.</p>
            </div>
          </div>
           <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
            <Home className="w-6 h-6 text-gray-600 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Autorizo a consulta ao SCR – Sistema de Crédito do Banco Central e aos cadastros e órgãos de proteção ao crédito.</p>
            </div>
          </div>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Li e concordo
          </button>
        </div>
    </div>
  );
}

export default EighthPage;

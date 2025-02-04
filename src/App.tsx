import React, { useState, useEffect } from 'react';
import { CreditCard, ShieldCheck, Lock, Gift } from 'lucide-react';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import SeventhPage from './SeventhPage';
import EighthPage from './EighthPage';
import NinthPage from './NinthPage';
import TenthPage from './TenthPage';
import EleventhPage from './EleventhPage';
import TwelfthPage from './TwelfthPage';
import ThirteenthPage from './ThirteenthPage';
import FourteenthPage from './FourteenthPage';
import FifteenthPage from './FifteenthPage';
import SixteenthPage from './SixteenthPage';
import SeventeenthPage from './SeventeenthPage';
import EighteenthPage from './EighteenthPage';
import NineteenthPage from './NineteenthPage';
import TwentiethPage from './TwentiethPage';

function App() {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [showThirdPage, setShowThirdPage] = useState(false);
  const [showFourthPage, setShowFourthPage] = useState(false);
  const [showFifthPage, setShowFifthPage] = useState(false);
  const [showSixthPage, setShowSixthPage] = useState(false);
  const [showSeventhPage, setShowSeventhPage] = useState(false);
  const [showEighthPage, setShowEighthPage] = useState(false);
  const [showNinthPage, setShowNinthPage] = useState(false);
  const [showTenthPage, setShowTenthPage] = useState(false);
  const [showEleventhPage, setShowEleventhPage] = useState(false);
  const [showTwelfthPage, setShowTwelfthPage] = useState(false);
  const [showThirteenthPage, setShowThirteenthPage] = useState(false);
  const [showFourteenthPage, setShowFourteenthPage] = useState(false);
  const [showFifteenthPage, setShowFifteenthPage] = useState(false);
  const [showSixteenthPage, setShowSixteenthPage] = useState(false);
  const [showSeventeenthPage, setShowSeventeenthPage] = useState(false);
  const [showEighteenthPage, setShowEighteenthPage] = useState(false);
  const [showNineteenthPage, setShowNineteenthPage] = useState(false);
  const [showTwentiethPage, setShowTwentiethPage] = useState(false);


  const handleNextFromSecondPage = () => {
    setShowSecondPage(false);
    setShowThirdPage(true);
  };

  const handleNextFromThirdPage = () => {
    setShowThirdPage(false);
    setShowFourthPage(true);
  };

  const handleNextFromFourthPage = () => {
    setShowFourthPage(false);
    setShowFifthPage(true);
  };

  const handleNextFromFifthPage = () => {
    setShowFifthPage(false);
    setShowSixthPage(true);
  };

  const handleNextFromSixthPage = () => {
    setShowSixthPage(false);
    setShowSeventhPage(true);
  };

  const handleNextFromSeventhPage = () => {
    setShowSeventhPage(false);
    setShowEighthPage(true);
  };

  const handleNextFromEighthPage = () => {
    setShowEighthPage(false);
    setShowNinthPage(true);
  };

  const handleNextFromNinthPage = () => {
    setShowNinthPage(false);
    setShowTenthPage(true);
  };

  const handleNextFromTenthPage = () => {
    setShowTenthPage(false);
    setShowEleventhPage(true);
  };

  const handleNextFromEleventhPage = () => {
    setShowEleventhPage(false);
    setShowTwelfthPage(true);
  };

  const handleNextFromTwelfthPage = () => {
    setShowTwelfthPage(false);
    setShowThirteenthPage(true);
  };

  const handleNextFromThirteenthPage = () => {
    setShowThirteenthPage(false);
    setShowFourteenthPage(true);
  };

  const handleNextFromFourteenthPage = () => {
    setShowFourteenthPage(false);
    setShowFifteenthPage(true);
  };

  const handleNextFromFifteenthPage = () => {
    setShowFifteenthPage(false);
    setShowSixteenthPage(true);
  };

  const handleNextFromSixteenthPage = () => {
    setShowSixteenthPage(false);
    setShowSeventeenthPage(true);
  };

  const handleNextFromSeventeenthPage = () => {
    setShowSeventeenthPage(false);
    setShowEighteenthPage(true);
  };

  const handleNextFromEighteenthPage = () => {
    setShowEighteenthPage(false);
    setShowNineteenthPage(true);
  };

  const handleNextFromNineteenthPage = () => {
    setShowNineteenthPage(false);
    setShowTwentiethPage(true);
  };

  const handleBackFromThirdPage = () => {
    setShowThirdPage(false);
    setShowSecondPage(true);
  };

  const handleBackFromFourthPage = () => {
    setShowFourthPage(false);
    setShowThirdPage(true);
  };

  const handleBackFromFifthPage = () => {
    setShowFifthPage(false);
    setShowFourthPage(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on every render
  });

  if (showTwentiethPage) {
    return <TwentiethPage />;
  }

  if (showNineteenthPage) {
    return <NineteenthPage onNext={handleNextFromNineteenthPage} />;
  }

  if (showEighteenthPage) {
    return <EighteenthPage onNext={handleNextFromEighteenthPage} />;
  }

  if (showSeventeenthPage) {
    return <SeventeenthPage onNext={handleNextFromSeventeenthPage} />;
  }

  if (showSixteenthPage) {
    return <SixteenthPage onNext={handleNextFromSixteenthPage} />;
  }

  if (showFifteenthPage) {
    return <FifteenthPage onNext={handleNextFromFifteenthPage} onBack={handleBackFromFifthPage} />;
  }

  if (showFourteenthPage) {
    return <FourteenthPage onNext={handleNextFromFourteenthPage} onBack={handleBackFromFourthPage} />;
  }

  if (showThirteenthPage) {
    return <ThirteenthPage onNext={handleNextFromThirteenthPage} onBack={handleBackFromThirdPage} />;
  }

  if (showTwelfthPage) {
    return <TwelfthPage onNext={handleNextFromTwelfthPage} />;
  }

  if (showEleventhPage) {
    return <EleventhPage onNext={handleNextFromEleventhPage} />;
  }

  if (showTenthPage) {
    return <TenthPage onNext={handleNextFromTenthPage} />;
  }

  if (showNinthPage) {
    return <NinthPage onNext={handleNextFromNinthPage} />;
  }

  if (showEighthPage) {
    return <EighthPage onNext={handleNextFromEighthPage} />;
  }

  if (showSeventhPage) {
    return <SeventhPage onNext={handleNextFromSeventhPage} />;
  }

  if (showSixthPage) {
    return <SixthPage onNext={handleNextFromSixthPage} />;
  }

  if (showFifthPage) {
    return <FifthPage onNext={handleNextFromFifthPage} onBack={handleBackFromFifthPage} />;
  }

  if (showFourthPage) {
    return <FourthPage onNext={handleNextFromFourthPage} onBack={handleBackFromFourthPage} />;
  }

  if (showThirdPage) {
    return <ThirdPage onNext={handleNextFromThirdPage} onBack={handleBackFromThirdPage} />;
  }

  if (showSecondPage) {
    return <SecondPage onNext={handleNextFromSecondPage} />;
  }

  return (
    <div className="min-h-screen bg-[#ff4d2d] text-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-center">
        <img 
          src="https://freelogopng.com/images/all_img/1656181621shopee-logo-white.png" 
          alt="Shopee Logo" 
          className="h-8 mb-12"
        />
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 pb-8 flex-1">
        <div className="text-center mb-6">
          <p className="bg-[#ff6b4f] inline-block px-4 py-1 rounded-full text-sm mb-4">
            Sem consulta ao SPC/Serasa
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Cartão Shopee com limite pré-aprovado de até R$ 5.000
          </h2>
          <p className="text-sm mb-4">
            Processo 100% digital, sem burocracia e sem precisar sair de casa
          </p>
        </div>

        {/* Security Features */}
        <div className="flex justify-between mb-6">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            <span className="text-sm">Site Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm">Dados Protegidos</span>
          </div>
        </div>

        {/* CTA Button */}
        <button onClick={() => setShowSecondPage(true)} className="w-full bg-white text-[#ff4d2d] py-3 rounded-lg font-bold mb-8">
          QUERO SOLICITAR MEU CARTÃO
        </button>

        {/* How it Works */}
        <section className="bg-white text-gray-800 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-6">Como funciona?</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#ff4d2d] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold mb-1">Responda o Quiz</h4>
                <p className="text-sm text-gray-600">
                  Apenas 4 perguntas rápidas para analisarmos seu perfil
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#ff4d2d] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold mb-1">Análise Instantânea</h4>
                <p className="text-sm text-gray-600">
                  Resultado em segundos, sem consulta ao SPC/Serasa
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#ff4d2d] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold mb-1">Receba seu Cartão</h4>
                <p className="text-sm text-gray-600">
                  Cartão virtual na hora e físico em até 7 dias úteis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="space-y-4">
          <div className="bg-white text-gray-800 p-4 rounded-lg flex items-center gap-4">
            <CreditCard className="w-6 h-6 text-[#ff4d2d]" />
            <div>
              <h4 className="font-bold">Zero Anuidade</h4>
              <p className="text-sm text-gray-600">Economize mais de R$ 500 por ano em anuidades</p>
            </div>
          </div>

          <div className="bg-white text-gray-800 p-4 rounded-lg flex items-center gap-4">
            <CreditCard className="w-6 h-6 text-[#ff4d2d]" />
            <div>
              <h4 className="font-bold">Limite Flexível</h4>
              <p className="text-sm text-gray-600">Aumente seu limite conforme usa o cartão</p>
            </div>
          </div>

          <div className="bg-white text-gray-800 p-4 rounded-lg flex items-center gap-4">
            <Gift className="w-6 h-6 text-[#ff4d2d]" />
            <div>
              <h4 className="font-bold">Cashback Garantido</h4>
              <p className="text-sm text-gray-600">Receba até 5% de volta em todas as suas compras</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-xs p-4 mt-8">
        <div className="max-w-md mx-auto">
          <p className="mb-2">© 2022 Shopee Brasil. CNPJ: 35.635.824/0001-12</p>
          <p>Av. das Nações Unidas, 3003 - Bonfim, Osasco - SP, 06233-903</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

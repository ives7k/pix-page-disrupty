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
import TwentyFirstPage from './TwentyFirstPage';
import TwentySecondPage from './TwentySecondPage';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

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
  const [showTwentyFirstPage, setShowTwentyFirstPage] = useState(false);
  const [showTwentySecondPage, setShowTwentySecondPage] = useState(false);

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

  const handleNextFromTwentiethPage = () => {
    setShowTwentiethPage(false);
    setShowTwentyFirstPage(true);
  };

  const handleNextFromTwentyFirstPage = () => {
    setShowTwentyFirstPage(false);
    setShowTwentySecondPage(true);
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
    const freteStatus = localStorage.getItem('frete');
    if (freteStatus === 'paid') {
      setShowTwentyFirstPage(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <AnimatePresence initial={false} mode='wait'>
      {showSecondPage && (
        <Layout>
          <motion.div
            key="second"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <SecondPage onNext={handleNextFromSecondPage} />
          </motion.div>
        </Layout>
      )}

      {showThirdPage && (
        <Layout>
          <motion.div
            key="third"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <ThirdPage onNext={handleNextFromThirdPage} onBack={handleBackFromThirdPage} />
          </motion.div>
        </Layout>
      )}

      {showFourthPage && (
        <Layout>
          <motion.div
            key="fourth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <FourthPage onNext={handleNextFromFourthPage} onBack={handleBackFromFourthPage} />
          </motion.div>
        </Layout>
      )}

      {showFifthPage && (
        <Layout>
          <motion.div
            key="fifth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <FifthPage onNext={handleNextFromFifthPage} onBack={handleBackFromFifthPage} />
          </motion.div>
        </Layout>
      )}

      {showSixthPage && (
        <Layout>
          <motion.div
            key="sixth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <SixthPage onNext={handleNextFromSixthPage} />
          </motion.div>
        </Layout>
      )}

      {showSeventhPage && (
        <Layout>
          <motion.div
            key="seventh"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <SeventhPage onNext={handleNextFromSeventhPage} />
          </motion.div>
        </Layout>
      )}

      {showEighthPage && (
        <Layout>
          <motion.div
            key="eighth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <EighthPage onNext={handleNextFromEighthPage} />
          </motion.div>
        </Layout>
      )}

      {showNinthPage && (
        <Layout>
          <motion.div
            key="ninth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <NinthPage onNext={handleNextFromNinthPage} />
          </motion.div>
        </Layout>
      )}

      {showTenthPage && (
        <Layout>
          <motion.div
            key="tenth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <TenthPage onNext={handleNextFromTenthPage} />
          </motion.div>
        </Layout>
      )}

      {showEleventhPage && (
        <Layout>
          <motion.div
            key="eleventh"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <EleventhPage onNext={handleNextFromEleventhPage} />
          </motion.div>
        </Layout>
      )}

      {showTwelfthPage && (
        <Layout>
          <motion.div
            key="twelfth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <TwelfthPage onNext={handleNextFromTwelfthPage} />
          </motion.div>
        </Layout>
      )}

      {showThirteenthPage && (
        <Layout>
          <motion.div
            key="thirteenth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <ThirteenthPage onNext={handleNextFromThirteenthPage} />
          </motion.div>
        </Layout>
      )}

      {showFourteenthPage && (
        <Layout>
          <motion.div
            key="fourteenth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <FourteenthPage onNext={handleNextFromFourteenthPage} />
          </motion.div>
        </Layout>
      )}

      {showFifteenthPage && (
        <Layout>
          <motion.div
            key="fifteenth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <FifteenthPage onNext={handleNextFromFifteenthPage} />
          </motion.div>
        </Layout>
      )}

      {showSixteenthPage && (
        <Layout>
          <motion.div
            key="sixteenth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <SixteenthPage onNext={handleNextFromSixteenthPage} />
          </motion.div>
        </Layout>
      )}

      {showSeventeenthPage && (
        <Layout>
          <motion.div
            key="seventeenth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <SeventeenthPage onNext={handleNextFromSeventeenthPage} />
          </motion.div>
        </Layout>
      )}

      {showEighteenthPage && (
        <Layout>
          <motion.div
            key="eighteenth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <EighteenthPage onNext={handleNextFromEighteenthPage} />
          </motion.div>
        </Layout>
      )}

      {showNineteenthPage && (
        <Layout>
          <motion.div
            key="nineteenth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <NineteenthPage onNext={handleNextFromNineteenthPage} />
          </motion.div>
        </Layout>
      )}

      {showTwentiethPage && (
        <Layout>
          <motion.div
            key="twentieth"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <TwentiethPage onNext={handleNextFromTwentiethPage} />
          </motion.div>
        </Layout>
      )}

      {showTwentyFirstPage && (
        <Layout>
          <motion.div
            key="twentyFirst"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <TwentyFirstPage onNext={handleNextFromTwentyFirstPage} />
          </motion.div>
        </Layout>
      )}

      {showTwentySecondPage && (
        <Layout>
          <motion.div
            key="twentySecond"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <TwentySecondPage />
          </motion.div>
        </Layout>
      )}

      {!showSecondPage && !showThirdPage && !showFourthPage && !showFifthPage && !showSixthPage && !showSeventhPage && !showEighthPage && !showNinthPage && !showTenthPage && !showEleventhPage && !showTwelfthPage && !showThirteenthPage && !showFourteenthPage && !showFifteenthPage && !showSixteenthPage && !showSeventeenthPage && !showEighteenthPage && !showNineteenthPage && !showTwentiethPage && !showTwentyFirstPage && !showTwentySecondPage && (
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
      )}
    </AnimatePresence>
  );
}

export default App;

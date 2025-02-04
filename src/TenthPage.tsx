import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import './TenthPage.css';
import { Loader2 } from 'lucide-react';

interface TenthPageProps {
  onNext: () => void;
}

function TenthPage({ onNext }: TenthPageProps) {
    const steps = [
        "Aguardando resposta do sistema...",
        "Analisando seu perfil...",
        "Verificando limite disponível...",
        "Preparando seu cartão...",
        "Finalizando solicitação..."
    ];
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (currentStep < steps.length) {
            const timer = setTimeout(() => {
                setCurrentStep(currentStep + 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [currentStep]);

    useEffect(() => {
      if (currentStep === steps.length) {
        const timer = setTimeout(() => {
          onNext();
        }, 3000);

        return () => clearTimeout(timer);
      }
    }, [currentStep, onNext]);

  return (
    <Layout>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Aguarde enquanto processamos seu pedido
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-4 flex flex-col items-center">
          <div className="relative mb-8">
            <div className="cartao-container">
              <div className="cartao">
                  {/* Substituição do chip por uma imagem */}
                  <img src="https://i.postimg.cc/ydr722Fv/chip-1-logo-png-transparent.png" alt="Chip do Cartão" className="imagem-chip" />

                  {/* Imagem adicional no canto superior direito */}
                  <img src="https://i.postimg.cc/tgkqNs70/Design-sem-nome.png" alt="Imagem adicional" className="imagem-adicional" />
                  
                  {/* Imagem adicional-2 no canto superior direito */}
                  <img src="https://i.postimg.cc/wvB6f9s1/Bank.png" alt="Imagem adicional-2" className="imagem-adicional-2" />
                
                 {/* Imagem adicional-3 no canto superior direito */}
                  <img src="https://i.postimg.cc/TPf2bVdq/Visa-logo-white.png" alt="Imagem adicional-3" className="imagem-adicional-3" />

                  {/* Texto do cartão */}
                  <div className="texto">Cartão de Crédito</div>

                  {/* Barra de progresso */}
                  <div className="barra-progresso">
                      <div className="progresso"></div>
                  </div>
              </div>
            </div>
            </div>
          <div className="text-left space-y-2">
            {steps.slice(0, currentStep).map((step, index) => (
              <p key={index} className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-gray-600" />
                {step}
              </p>
            ))}
          </div>
        </div>
    </Layout>
  );
}

export default TenthPage;

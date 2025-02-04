import React, { useState } from 'react';
import Layout from './components/Layout';
import './FourteenthPage.css';

interface FourteenthPageProps {
  onNext: () => void;
}

function FourteenthPage({ onNext }: FourteenthPageProps) {
    const cpf = localStorage.getItem('cpf') || '000.000.000-00';
    const nomeCompleto = localStorage.getItem('nomeCompleto') || 'SEU NOME AQUI';
    const [selectedColor, setSelectedColor] = useState('#ff4d2d');

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        localStorage.setItem('cardColor', color);
    };

  return (
    <Layout>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Escolha o design do seu cartão
          </h2>
          <p className="text-gray-600 mb-6">
            Selecione o estilo que mais combina com voce
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4 flex flex-col items-center">
          <div className="flex gap-4 mb-4">
            <button onClick={() => handleColorChange('#ff4d2d')} className={`w-12 h-12 rounded-full bg-[#ff4d2d] border-2 ${selectedColor === '#ff4d2d' ? 'border-blue-500' : 'border-transparent'} `}></button>
            <button onClick={() => handleColorChange('#9c27b0')} className={`w-12 h-12 rounded-full bg-purple-600 border-2 ${selectedColor === '#9c27b0' ? 'border-blue-500' : 'border-transparent'}`}></button>
            <button onClick={() => handleColorChange('#1e293b')} className={`w-12 h-12 rounded-full bg-[#1e293b] border-2 ${selectedColor === '#1e293b' ? 'border-blue-500' : 'border-transparent'}`}></button>
            <button onClick={() => handleColorChange('#1e90ff')} className={`w-12 h-12 rounded-full bg-blue-600 border-2 ${selectedColor === '#1e90ff' ? 'border-blue-500' : 'border-transparent'}`}></button>
          </div>
          <div className="cartao-container mb-8">
            <div className="cartao" style={{ '--cartao-bg': selectedColor }}>
                <img src="https://i.postimg.cc/wvB6f9s1/Bank.png" alt="top-left-text" className="top-left-text" />
                <img src="https://i.postimg.cc/TPf2bVdq/Visa-logo-white.png" alt="Top-right logo" className="top-right-img" />
                <img src="https://i.postimg.cc/ydr722Fv/chip-1-logo-png-transparent.png" alt="Chip do Cartão" className="imagem-chip" />
                <img src="https://i.postimg.cc/tgkqNs70/Design-sem-nome.png" alt="Lateral logo" className="imagem-lateral" />
                <div className="card-details">
                    <div className="titular">
                        <p >TITULAR DO CARTÃO</p>
                        <p id="titular-nome" style={{fontSize: '16px'}}>{nomeCompleto}</p>
                    </div>
                    <div className="valido">
                        <p >VÁLIDO ATÉ</p>
                        <p id="valido-data" style={{fontSize: '14px'}}>01/32</p>
                    </div>
                </div>
            </div>
        </div>
          <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f] mt-4">
            Continuar
          </button>
        </div>
    </Layout>
  );
}

export default FourteenthPage;

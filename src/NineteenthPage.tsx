import React from 'react';
import Layout from './components/Layout';
import { CreditCard, CheckCircle } from 'lucide-react';
import './NineteenthPage.css';

interface NineteenthPageProps {
  onNext: () => void;
}

function NineteenthPage({ onNext }: NineteenthPageProps) {
  const shippingMethod = localStorage.getItem('shippingMethod');
  const parsedShippingMethod = shippingMethod ? JSON.parse(shippingMethod) : null;
  const nomeCompleto = localStorage.getItem('nomeCompleto');
  const cardColor = localStorage.getItem('cardColor') || '#ff4d2d';
  const endereco = localStorage.getItem('endereco');
  const parsedEndereco = endereco ? JSON.parse(endereco) : null;
  const contato = localStorage.getItem('contato');
  const parsedContato = contato ? JSON.parse(contato) : null;
  const cpf = localStorage.getItem('cpf');

  return (
    <Layout>
      <div className="page-content">

        <div className="main-content">
          <div className="section limit-available">
            <p className="limit-text" style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Limite Disponível</p>
            <h1 className="limit-value">R$ 4.700,00</h1>
          </div>

          <div className="card-container">
            <div className="cartao" style={{ '--cartao-bg': cardColor }}>
              <img src="https://i.postimg.cc/wvB6f9s1/Bank.png" alt="top-left-text" className="top-left-text" />
              <img src="https://i.postimg.cc/TPf2bVdq/Visa-logo-white.png" alt="Top-right logo" className="top-right-img" />
              <img src="https://i.postimg.cc/ydr722Fv/chip-1-logo-png-transparent.png" alt="Chip do Cartão" className="imagem-chip" />
              <img src="https://i.postimg.cc/tgkqNs70/Design-sem-nome.png" alt="Lateral logo" className="imagem-lateral" />
              <div className="card-details">
                <div className="titular">
                  <p>TITULAR DO CARTÃO</p>
                  <p id="titular-nome" style={{ fontSize: '16px' }}>{nomeCompleto || 'Nome Completo'}</p>
                </div>
                <div className="valido">
                  <p>VÁLIDO ATÉ</p>
                  <p id="valido-data" style={{ fontSize: '14px' }}>01/32</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-4"> 
            <h2 className="text-xl font-bold mb-4">Dados cadastrais:</h2>
            <div className="space-y-2">
              <div>
                <p className="font-bold">Nome completo:</p>
                <p>{nomeCompleto || 'Nome Completo'}</p>
              </div>
              <div>
                <p className="font-bold">Email:</p>
                <p>{parsedContato?.email || 'Email'}</p>
              </div>
              <div>
                <p className="font-bold">Telefone:</p>
                <p>{parsedContato?.telefone || 'Telefone'}</p>
              </div>
              <div>
                <p className="font-bold">CPF:</p>
                <p>{cpf || 'CPF'}</p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center">Finalize o envio do seu cartão, efetue o pagamento do frete para receber o seu cartão físico e ativar o cartão virtual</p>

          <button onClick={onNext} className="btn-custom w-full mt-4">Pagar Frete</button> 
        </div>
      </div>
    </Layout>
  );
}

export default NineteenthPage;

import React, { useState } from 'react';
import Layout from './components/Layout';
import './SixteenthPage.css';

interface SixteenthPageProps {
  onNext: () => void;
}

function SixteenthPage({ onNext }: SixteenthPageProps) {
  const states = [
    "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SE", "SP", "TO"
  ];
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('AC');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleConfirmAddress = () => {
        localStorage.setItem('endereco', JSON.stringify({
            cep,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        }));
        localStorage.setItem('contato', JSON.stringify({email, telefone}));
        onNext();
    };

  return (
    <Layout>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Endereço de Entrega
          </h2>
          <p className="text-gray-600 mb-6">
            Informe onde você deseja receber seu cartão
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <form className="address-form" onSubmit={handleConfirmAddress}>
            <div className="form-group">
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" placeholder="00000-000" className="form-control" value={cep} onChange={(e) => setCep(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="rua">Rua</label>
              <input type="text" id="rua" placeholder="Digite sua rua" className="form-control" value={rua} onChange={(e) => setRua(e.target.value)} />
            </div>
            <div className="form-group flex items-center justify-between">
              <div className="w-1/2">
                <label htmlFor="numero">Número</label>
                <input type="text" id="numero" placeholder="Número" className="form-control" value={numero} onChange={(e) => setNumero(e.target.value)} />
              </div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Sem número
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="complemento">Complemento (opcional)</label>
              <input type="text" id="complemento" placeholder="Complemento (opcional)" className="form-control" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="bairro">Bairro</label>
              <input type="text" id="bairro" placeholder="Bairro" className="form-control" value={bairro} onChange={(e) => setBairro(e.target.value)} />
            </div>
            <div className="form-group flex items-center justify-between">
              <div className="w-1/2">
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" placeholder="Cidade" className="form-control" value={cidade} onChange={(e) => setCidade(e.target.value)} />
              </div>
              <div className="w-1/2 text-right"> {/* Aligned to the right */}
                <label htmlFor="estado">Estado</label>
                <select id="estado" className="form-control state-select" value={estado} onChange={(e) => setEstado(e.target.value)}>
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Seu email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" placeholder="Seu telefone" className="form-control" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
              </div>
            </div>
            <button type="submit" className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f] mt-4">
              Confirmar endereço
            </button>
          </form>
        </div>
    </Layout>
  );
}

export default SixteenthPage;

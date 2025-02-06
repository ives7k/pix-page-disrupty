import React, { useState } from 'react';
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
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = () => {
        const isValid = cep.replace(/\D/g, '').length === 8 && rua !== '' && numero !== '' && bairro !== '' && cidade !== '' && estado !== '' && email !== '' && telefone.replace(/\D/g, '').length >= 10;
        setIsFormValid(isValid);
    };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    value = value.slice(0, 8); // Limit to 8 digits
    if (value.length > 5) {
      value = `${value.slice(0, 5)}-${value.slice(5)}`; // Add hyphen
    }
    setCep(value);
    handleInputChange();
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        value = value.slice(0, 11); // Limit to 11 digits
        if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        }
        if (value.length > 9) {
          value = `${value.slice(0, 10)}-${value.slice(10)}`; // Add hyphen
        }
    setTelefone(value);
    handleInputChange();
  };

    const handleRuaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRua(e.target.value);
        handleInputChange();
    };

    const handleNumeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumero(e.target.value);
        handleInputChange();
    };

    const handleComplementoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComplemento(e.target.value);
        handleInputChange();
    };

    const handleBairroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBairro(e.target.value);
        handleInputChange();
    };

    const handleCidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCidade(e.target.value);
        handleInputChange();
    };

    const handleEstadoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEstado(e.target.value);
        handleInputChange();
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        handleInputChange();
    };



    const handleConfirmAddress = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
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
        }
    };

  return (
    <div className="max-w-md px-4 py-8 flex-1 w-full">
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
              <input type="text" id="cep" placeholder="00000-000" className="form-control" value={cep} onChange={handleCepChange} maxLength={9}/>
            </div>
            <div className="form-group">
              <label htmlFor="rua">Rua</label>
              <input type="text" id="rua" placeholder="Digite sua rua" className="form-control" value={rua} onChange={handleRuaChange} />
            </div>
            <div className="form-group flex items-center justify-between">
              <div className="w-1/2">
                <label htmlFor="numero">Número</label>
                <input type="text" id="numero" placeholder="Número" className="form-control" value={numero} onChange={handleNumeroChange} />
              </div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Sem número
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="complemento">Complemento (opcional)</label>
              <input type="text" id="complemento" placeholder="Complemento (opcional)" className="form-control" value={complemento} onChange={handleComplementoChange} />
            </div>
            <div className="form-group">
              <label htmlFor="bairro">Bairro</label>
              <input type="text" id="bairro" placeholder="Bairro" className="form-control" value={bairro} onChange={handleBairroChange} />
            </div>
            <div className="form-group flex items-center justify-between">
              <div className="w-1/2">
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" placeholder="Cidade" className="form-control" value={cidade} onChange={handleCidadeChange} />
              </div>
              <div className="w-1/2 text-right">
                <label htmlFor="estado">Estado</label>
                <select id="estado" className="form-control state-select" value={estado} onChange={handleEstadoChange}>
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Seu email" className="form-control" value={email} onChange={handleEmailChange} />
              </div>
              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" placeholder="Seu telefone" className="form-control" value={telefone} onChange={handleTelefoneChange}  maxLength={15}/>
              </div>
            </div>
            <button type="submit" disabled={!isFormValid} className={`w-full text-white py-3 rounded-lg font-bold mt-4 ${isFormValid ? 'bg-[#ff4d2d] hover:bg-[#ff6b4f]' : 'bg-gray-400 cursor-not-allowed'}`}>
              Confirmar endereço
            </button>
          </form>
        </div>
    </div>
  );
}

export default SixteenthPage;

import React, { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import './NinthPage.css';

interface NinthPageProps {
  onNext: () => void;
}

function NinthPage({ onNext }: NinthPageProps) {
    const [cpf, setCpf] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [cpfData, setCpfData] = useState<any>(null);
    const [isCpfValid, setIsCpfValid] = useState(false);
    const [consulted, setConsulted] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 

    const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, '');
        value = value.slice(0, 11);
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        setCpf(value);
        setCpfError('');
        setCpfData(null);
        setIsCpfValid(validaCPF(value.replace(/\D/g, '')));
        setConsulted(false);
        setIsLoading(false); 
    };

    const validaCPF = (strCPF: string) => {
        let Soma = 0;
        let Resto;
        if (strCPF === "00000000000") return false;

        for (let i = 1; i <= 9; i++) Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) Resto = 0;
        if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) Resto = 0;
        if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
        return true;
    };

    const getCPF = async (strCPF: string) => {
        setIsLoading(true); 
        const url = "https://consulta.fontesderenda.blog/?token=4da265ab-0452-4f87-86be-8d83a04a745a&cpf=" + strCPF;
        const res = await fetch(url);
        return await res.json();
    };

    const handleConsultarCpf = async () => {
        const cleanCpf = cpf.replace(/\D/g, '');
        if (validaCPF(cleanCpf)) {
            try {
                const data = await getCPF(cleanCpf);
                setCpfData(data);
                setCpfError('');
                setConsulted(true);
                localStorage.setItem('cpf', cleanCpf);
                localStorage.setItem('nomeCompleto', data.DADOS.NOME);
                
            } catch (error) {
                setCpfError('Erro ao consultar CPF');
                setCpfData(null);
                setConsulted(false);
            } finally {
              setIsLoading(false); 
            }
        } else {
            setCpfError('CPF inválido');
            setCpfData(null);
            setConsulted(false);
            setIsLoading(false); 
        }
    };

  return (
    <div className="max-w-md px-4 py-8 flex-1 w-full">
        {!cpfData && (
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Preencha o CPF para consulta
            </h2>
          </div>
        )}

        {/* Options */}
        {!cpfData && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="000.000.000-00"
              className={`w-full border ${cpfError ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 mb-4`}
              value={cpf}
              onChange={handleCpfChange}
              maxLength={14}
            />
            {cpfError && <p className="text-red-500 text-sm mb-2">{cpfError}</p>}
            <button onClick={handleConsultarCpf} disabled={!isCpfValid || isLoading} className={`w-full text-white py-3 rounded-lg font-bold ${isCpfValid ? 'bg-[#ff4d2d] hover:bg-[#ff6b4f]' : 'bg-gray-400 cursor-not-allowed'}`}>
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="animate-spin mr-2 h-5 w-5 text-white" />
                  Carregando...
                </div>
              ) : (
                'Consultar CPF'
              )}
            </button>
          </div>
        )}
        {cpfData && cpfData.DADOS && (
          <>
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-green-500 bg-green-100 rounded-full p-1" />
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">Dados encontrados com sucesso!</h2>
            <div className="success-message">
              <div className="data-container">
                <div>
                  <p className="font-bold">Nome completo:</p>
                  <p>{cpfData.DADOS.NOME}</p>
                </div>
                <div>
                  <p className="font-bold">Nome da Mãe:</p>
                  <p>{cpfData.DADOS.NOME_MAE}</p>
                </div>
                <div>
                  <p className="font-bold">Data de Nascimento:</p>
                  <p>{cpfData.DADOS.NASC.split(' ')[0].split('-').reverse().join('/')}</p>
                </div>
                <div>
                  <p className="font-bold">Sexo:</p>
                  <p>{cpfData.DADOS.SEXO}</p>
                </div>
              </div>
            </div>
            <button onClick={onNext} className="w-full bg-[#ff4d2d] text-white py-3 rounded-lg font-bold hover:bg-[#ff6b4f] mt-4">
              Continuar
            </button>
          </>
        )}
    </div>
  );
}

export default NinthPage;

/** @format */
import 'react-toastify/dist/ReactToastify.css';

import { useState, useContext } from 'react';

import { ContatosContext } from '../../../contexts/ContatosContext';

import { useGetEmailContratos } from '../../../hooks/useGetEmailsContratos';

import { MdKeyboardArrowLeft } from 'react-icons/md';

import { CampoEmails } from './CampoEmailSignature';

import { toast } from 'react-toastify';

export const CriacaoContratos = ({
    contract,
    setContract,
    newContract,
    setNewContract,
    contractData,
    setContractData,
}) => {
    const { contactSelect } = useContext(ContatosContext);

    const { emails } = useGetEmailContratos();

    const fetchData = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/contrato`,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        ...contactSelect,
                        nome: contactSelect?.nome || contactSelect?.email,
                        status: 'Assinar',
                        contatoRef: contactSelect?.id,
                        assinaturas: [
                            contactSelect?.email,
                            emails?.franquia?.franqueadoEmail,
                            emails?.user?.email,
                        ],
                        contatoTel: contactSelect?.celular,
                        franquiaTel: emails?.franquia?.telefonePrincipal,
                        vendedorTel: emails?.user?.telefone,
                        jurisdicao: 'Brasil',
                        idioma: 'pt-BR',
                        vendedor_inicial: emails?.user?.email,
                        ultimo_vendedor: emails?.user?.email,
                        contrato_ref: 'novo',
                        fileId: contactSelect?.fileId,
                    }),
                },
            );

            console.log('response', response);

            if (!response.ok) throw new Error('Erro ao gerar!');

            const data = await response.json();

            console.log(data);

            toast.dismiss(1);

            toast.success('Enviado com sucesso!', {
                className: '[&_div]:text-[15rem]',
                toastId: 2,
                autoClose: 4000,
            });

            setTimeout(() => setContract(false), 4000);
        } catch (err) {
            console.error(err);

            toast.error(`Erro ao gerar contrato: ${err}`, {
                className: '[&_div]:text-[15rem]',
                toastId: 2,
                autoClose: 1200,
            });
        }
    };

    return (
        <div className="w-full flex flex-row">
            <div className="flex flex-col gap-y-6 items-center">
                <div className="w-full flex items-start">
                    <div className="flex flex-row w-[300rem] rounded-[15rem_15rem_15rem_15rem] items-center bg-white h-[60rem]">
                        <MdKeyboardArrowLeft
                            onClick={() => setContract(false)}
                            className="opacity-75 hover:cursor-pointer"
                            size={40}
                        />

                        <span className="text-2xl opacity-75">
                            Meus documentos
                        </span>
                    </div>
                </div>

                <div className="border-[2rem] border-gray-500 w-[450rem] rounded-[15rem_15rem_15rem_15rem] flex items-center justify-evenly h-[60rem] border-dashed ">
                    <label className="text-xl opacity-75">
                        Jurisdição e idioma
                    </label>

                    <div className="flex flex-row justify-between w-[150rem] items-center">
                        {/* <select
                            id="jurisdicao"
                            className="text-xl mr- text-[var(--primary)] bg-transparent"
                            onChange={(e) => {
                                setContractData({
                                    ...contractData,
                                    jurisdicao: e.target.value,
                                });
                            }}
                        >
                            <option
                                className="text-xl text-[var(--primary)]"
                                selected
                                value="Brasil"
                            >
                                Brasil
                            </option>
                        </select> */}

                        <label className="text-xl opacity-75">Brasil</label>

                        <label className="text-xl opacity-75">pt-BR</label>

                        {/* <select
                            className="text-xl text-[var(--primary)] bg-transparent"
                            id="lang"
                            onChange={(e) => {
                                setContractData({
                                    ...contractData,
                                    idioma: e.target.value,
                                });
                            }}
                        >
                            <option
                                className="text-xl text-[var(--primary)]"
                                selected
                                value="pt-BR"
                            >
                                pt-BR
                            </option>
                        </select> */}
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="flex flex-col gap-y-6">
                        <CampoEmails
                            email={contactSelect?.email}
                            referTo={'Proprietário da Obra'}
                        />

                        <CampoEmails
                            email={emails?.franquia?.franqueadoEmail}
                            referTo={'Dono da Franquia'}
                        />

                        <CampoEmails
                            email={emails?.user?.email}
                            referTo={'Vendedor'}
                        />
                    </div>
                </div>
            </div>

            <div className="px-24">
                <div className="w-[600rem] h-[200rem] rounded-[15rem] border-gray-500 border-[2rem] border-dashed flex items-center justify-center">
                    <button
                        onClick={() => {
                            toast.loading('Gerando...', {
                                className: '[&_div]:text-[15rem]',
                                toastId: 1,
                                progress: undefined,
                            });
                            fetchData();
                        }}
                        className="bg-[var(--primary)] text-2xl text-white font-bold w-[250rem] h-[80rem] rounded-[10rem]"
                    >
                        Gerar contrato
                    </button>
                </div>
            </div>
        </div>
    );
};

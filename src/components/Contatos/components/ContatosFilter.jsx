/** @format */

import { useContext, useState } from 'react';

import { VscSettings } from 'react-icons/vsc';
import { RxCaretSort } from 'react-icons/rx';

import { MenuSort } from './MenuSort';

import { ContatosContext } from '../../../contexts/ContatosContext';

export const ContatosFilter = ({ setDataFilter, setSelectedFilter }) => {
    const [menuHandle, setMenuHandle] = useState(false);

    const [handle, setHandle] = useState({
        custom: true,
        quente: false,
        fechado: false,
        morno: false,
        novo: false,
        frio: false,
        contato_futuro: false,
        fechar_na_semana: false,
        parceiro_quente: false,
        parceiro_morno: false,
        parceiro_frio: false,
        nao_responde: false,
    });

    //usado para os inputs aqui dentro
    const [inputData, setInputData] = useState({
        client: '',
        cpf: '',
        id: '',
        inicio: '',
        termino: '',
    });

    //assim que aplicar todos os dados e apertar no botão filter, ele filtra
    const setLocalInputDataToMainState = () => {
        setDataFilter(inputData);
    };

    const clearInputs = () => {
        setInputData({});
        setDataFilter({});
    };

    const { checked } = useContext(ContatosContext);

    return (
        <div
            style={handle.custom ? { height: '200rem' } : { height: '20rem' }}
            className="flex flex-col w-[100%] rounded"
        >
            <div className="flex flex-col justify-center hover:cursor-pointer relative">
                <div
                    onClick={() => setMenuHandle(!menuHandle)}
                    className="flex items-center"
                >
                    <RxCaretSort className="opacity-75" size={24} />

                    <span className="text-sm opacity-75 font-medium">
                        CLASSIFICAR
                    </span>
                </div>

                {menuHandle && (
                    <div className="absolute top-[30rem] left-[10rem] z-[11]">
                        <MenuSort checked={checked} />
                    </div>
                )}
            </div>

            <div className="flex flex-row justify-between w-fit relative">
                <ButtonFilter
                    nameType={'CUSTOM'}
                    handleSelected={'custom'}
                    handle={handle}
                    setSelectedFilter={setSelectedFilter}
                    setHandle={setHandle}
                    clearInputs={clearInputs}
                    setMenuHandle={setMenuHandle}
                />

                <ButtonFilter
                    nameType={'NOVO'}
                    handleSelected={'novo'}
                    handle={handle}
                    setSelectedFilter={setSelectedFilter}
                    setHandle={setHandle}
                    clearInputs={clearInputs}
                    setMenuHandle={setMenuHandle}
                />

                <ButtonFilter
                    nameType={'QUENTE'}
                    handleSelected={'quente'}
                    handle={handle}
                    setSelectedFilter={setSelectedFilter}
                    setHandle={setHandle}
                    clearInputs={clearInputs}
                    setMenuHandle={setMenuHandle}
                />

                <ButtonFilter
                    nameType={'FECHADO'}
                    handleSelected={'fechado'}
                    handle={handle}
                    setSelectedFilter={setSelectedFilter}
                    setHandle={setHandle}
                    clearInputs={clearInputs}
                    setMenuHandle={setMenuHandle}
                />

                <ButtonFilter
                    nameType={'MORNO'}
                    handleSelected={'morno'}
                    handle={handle}
                    setSelectedFilter={setSelectedFilter}
                    setHandle={setHandle}
                    clearInputs={clearInputs}
                    setMenuHandle={setMenuHandle}
                />

                <ButtonFilter
                    nameType={'FRIO'}
                    handleSelected={'frio'}
                    handle={handle}
                    setSelectedFilter={setSelectedFilter}
                    setHandle={setHandle}
                    clearInputs={clearInputs}
                    setMenuHandle={setMenuHandle}
                />

                <ButtonFilter
                    nameType={'CONTATO FUTURO'}
                    handleSelected={'contato_futuro'}
                    handle={handle}
                    setSelectedFilter={setSelectedFilter}
                    setHandle={setHandle}
                    clearInputs={clearInputs}
                    setMenuHandle={setMenuHandle}
                />
                <ButtonFilter
                    nameType={'FECHAR NA SEMANA'}
                    handleSelected={'fechar_na_semana'}
                    handle={handle}
                    setSelectedFilter={setSelectedFilter}
                    setHandle={setHandle}
                    clearInputs={clearInputs}
                    setMenuHandle={setMenuHandle}
                />
                <ButtonFilter
                    nameType={'PARCEIRO QUENTE'}
                    handleSelected={'parceiro_quente'}
                    handle={handle}
                    setSelectedFilter={setSelectedFilter}
                    setHandle={setHandle}
                    clearInputs={clearInputs}
                    setMenuHandle={setMenuHandle}
                />
                <ButtonFilter
                    nameType={'PARCEIRO MORNO'}
                    handleSelected={'parceiro_morno'}
                    handle={handle}
                    setSelectedFilter={setSelectedFilter}
                    setHandle={setHandle}
                    clearInputs={clearInputs}
                    setMenuHandle={setMenuHandle}
                />
                <ButtonFilter
                    nameType={'PARCEIRO FRIO'}
                    handleSelected={'parceiro_frio'}
                    handle={handle}
                    setSelectedFilter={setSelectedFilter}
                    setHandle={setHandle}
                    clearInputs={clearInputs}
                    setMenuHandle={setMenuHandle}
                />
                <ButtonFilter
                    nameType={'NÃO RESPONDE'}
                    handleSelected={'nao_responde'}
                    handle={handle}
                    setSelectedFilter={setSelectedFilter}
                    setHandle={setHandle}
                    clearInputs={clearInputs}
                    setMenuHandle={setMenuHandle}
                />
            </div>

            {handle.custom && (
                <div className="bg-white flex items-center px-8 h-[500rem] w-[100%] rounded-[0rem_10rem_10rem_10rem] ">
                    <div className="flex flex-col gap-y-1 mr-12 w-[100%]">
                        <div className="flex flex-row items-center">
                            <span className="text-[10rem]">Cliente</span>
                            <input
                                onChange={(e) =>
                                    setInputData({
                                        ...inputData,
                                        client: e.target.value,
                                    })
                                }
                                className="border-gray-400 border-[1rem] text-base px-4 rounded ml-2 h-[30rem] w-[100%] focus:outline-none"
                                type="text"
                            />
                        </div>

                        <div className="flex flex-row gap-[20rem]">
                            <div className="flex flex-row items-center w-[60%]">
                                <span className="text-[10rem] mr-[14rem] text-end">
                                    CPF
                                </span>
                                <input
                                    onChange={(e) =>
                                        setInputData({
                                            ...inputData,
                                            cpf: e.target.value,
                                        })
                                    }
                                    className="border-gray-400 border-[1rem] text-base px-4 rounded h-[30rem] ml-2 w-[100%] focus:outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-row items-center w-[40%]">
                                <span className="text-[10rem] w-[150rem]">
                                    ID
                                </span>
                                <input
                                    onChange={(e) =>
                                        setInputData({
                                            ...inputData,
                                            id: e.target.value,
                                        })
                                    }
                                    className="border-gray-400 border-[1rem] text-base px-4 rounded h-[30rem] w-[100%]
                focus:outline-none"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-4 mr-6 w-[30%]">
                        <div className="flex flex-row">
                            <span className="text-xs text-end h-[30rem] flex items-center justify-end mr-[17rem]">
                                Início
                            </span>
                            <input
                                onChange={(e) =>
                                    setInputData({
                                        ...inputData,
                                        inicio: e.target.value,
                                    })
                                }
                                className=" text-center border-gray-400 border-[1rem] rounded h-[30rem] ml-2 w-[100%] text-xs pr-2 focus:outline-none "
                                type="date"
                            />
                        </div>
                        <div className="flex flex-row">
                            <span className="text-xs h-[30rem] flex items-center justify-center ">
                                Término
                            </span>
                            <input
                                onChange={(e) =>
                                    setInputData({
                                        ...inputData,
                                        termino: e.target.value,
                                    })
                                }
                                className=" text-center text-xs border-gray-400 rounded border-[1rem] h-[30rem] ml-2 w-[100%] pr-2 focus:outline-none"
                                type="date"
                            />
                        </div>
                    </div>

                    <div className="w-[10%]">
                        <button
                            className="text-base font-bold bg-[#00CC93] w-[100rem] h-[80rem] rounded-[12rem] text-white"
                            onClick={() => setLocalInputDataToMainState()}
                        >
                            FILTRAR
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const ButtonFilter = ({
    clearInputs,
    nameType,
    handleSelected,
    setHandle,
    handle,
    setSelectedFilter,
    setMenuHandle,
}) => {
    return (
        <div
            onClick={() => {
                const newHandle = handle;

                Object.keys(newHandle).map((key) =>
                    key === handleSelected
                        ? (newHandle[key] = true)
                        : (newHandle[key] = false),
                );

                clearInputs();
                setHandle(newHandle);
                setSelectedFilter(handleSelected);
                setMenuHandle(false);
            }}
            style={
                handle[handleSelected]
                    ? { background: 'white' }
                    : { background: '#EEF1F6' }
            }
            className="flex items-center justify-center ml-3 bg-white w-fit rounded-[10rem_10rem_0rem_0rem] p-[10rem] relative"
        >
            {/* <div className="h-[15rem] w-[15rem] z-10 bg-[#eef1f6] absolute rounded-full right-[-15rem] bottom-[0rem]"></div> */}
            

            <div
                style={
                    handle[handleSelected]
                        ? { background: 'white' }
                        : { background: '#EEF1F6' }
                }
                // className="h-[7rem] w-[7rem] bg-white z-0 absolute left-[-7rem] top-[33rem] "
            />

            <div className="flex flex-row items-center justify-center">
                <span className="text-sm hover:cursor-pointer font-medium opacity-75">
                    {nameType}
                </span>
            </div>

                {/* <div className="h-[15rem] w-[15rem] z-10 bg-[#eef1f6] absolute rounded-full left-[-15rem] bottom-[0rem] "></div> */}
            

            <div
                style={
                    handle[handleSelected]
                        ? { background: 'white' }
                        : { background: '#EEF1F6' }
                }
                // className="h-[7rem] w-[7rem] bg-white z-0 absolute right-[-7rem] top-[33rem] "
            />
        </div>
    );
};

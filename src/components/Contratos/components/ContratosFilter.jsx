/** @format */

import { useState } from 'react';
import { VscSettings } from 'react-icons/vsc';

export const ContratosFilter = ({ setDataFilter, setSelectedFilter }) => {
    const [handle, setHandle] = useState({
        custom: true,
        naoAssinado: false,
        assinado: false,
    });

    //usado para os inputs aqui dentro
    const [inputData, setInputData] = useState({
        contract: '',
        client: '',
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

    return (
        <div
            style={handle.custom ? { height: '200rem' } : { height: '0rem' }}
            className="flex flex-col w-[100%] mb-12"
        >
            <div className="flex flex-row items-center w-full bg-white justify-between py-2 rounded-[10rem_10rem_0rem_0rem]">
                <div className="flex flex-row justify-between w-[375rem]">
                    <div className="hover:cursor-pointer flex bg-white  items-center justify-center">
                        <div
                            onClick={() => {
                                setHandle({
                                    custom: true,
                                    naoAssinado: false,
                                    assinado: false,
                                });
                                setSelectedFilter('CUSTOM');
                            }}
                            className="relative bg-white h-[40rem] w-[50rem] flex items-center justify-center rounded-[10rem_10rem_0rem_0rem]"
                        >
                            <VscSettings className="w-[28rem] h-[28rem] fill-gray-500" />
                        </div>
                    </div>

                    <div
                        onClick={() => {
                            clearInputs();
                            setHandle({
                                custom: false,
                                naoAssinado: true,
                                assinado: false,
                            });
                            setSelectedFilter('NÃO ASSINADO');
                        }}
                        className="flex items-center justify-center mr-2
         bg-white w-[150rem] rounded-[10rem_10rem_0rem_0rem] relative"
                    >
                        <div className="flex flex-row w-[150rem] items-center justify-center">
                            <span className="text-sm  font-medium opacity-75 hover:cursor-pointer">
                                NÃO ASSINADO
                            </span>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            clearInputs();
                            setHandle({
                                custom: false,
                                naoAssinado: false,
                                assinado: true,
                            });
                            setSelectedFilter('ASSINADO');
                        }}
                        className="flex items-center justify-center mr-2
         bg-white w-[85rem] rounded-[10rem_10rem_0rem_0rem] relative"
                    >
                        <div className="flex flex-row items-center justify-center">
                            <span className="text-sm hover:cursor-pointer font-medium opacity-75">
                                ASSINADO
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {handle.custom && (
                <div className="bg-white flex items-center px-8 mt-6 h-[500rem] w-[100%] rounded-[0rem_0rem_10rem_10rem] ">
                    <div className="flex flex-col gap-y-4 mr-12 w-[100%]">
                        <div className="flex flex-row items-center">
                            <span className="text-[10rem]">
                                Nome do Contrato
                            </span>
                            <input
                                onChange={(e) =>
                                    setInputData({
                                        ...inputData,
                                        contract: e.target.value,
                                    })
                                }
                                className="border-gray-400 border-[1rem] text-base px-4 rounded ml-2 h-[30rem] w-[100%] focus:outline-none"
                                type="text"
                            />
                        </div>

                        <div className="flex flex-row gap-[20rem]">
                            <div className="flex flex-row items-center w-[60%]">
                                <span className="text-[10rem] mr-[14rem]">
                                    Nome do Cliente
                                </span>
                                <input
                                    onChange={(e) =>
                                        setInputData({
                                            ...inputData,
                                            client: e.target.value,
                                        })
                                    }
                                    className="border-gray-400 border-[1rem] text-base px-4 rounded h-[30rem] ml-2 w-[100%] focus:outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-row items-center w-[40%]">
                                <span className="text-[10rem] w-[150rem]">
                                    Status do Contrato
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

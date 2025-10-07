/** @format */

import { useEffect, useState } from 'react';

import { checkEquality } from '../../utils/checkEquality';

import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { CiClock2 } from 'react-icons/ci';

// import Arr from '../../utils/month';

export const Contratos = ({ dataFilter, selectedFilter }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataFetch = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/contrato`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                },
            );

            const dados = await response.json();

            setData(dados);
        };

        dataFetch();
    }, []);

    let filteredValues = [];

    const isEmpty =
        dataFilter.contract === '' &&
        dataFilter.client === '' &&
        dataFilter.id === '' &&
        dataFilter.inicio === '' &&
        dataFilter.termino === '';

    if (selectedFilter !== 'CUSTOM') {
        filteredValues = data.filter((key) => {
            if (selectedFilter === 'NÃO ASSINADO')
                return key.status === 'aguardando';

            if (selectedFilter === 'ASSINADO') return key.status === 'assinado';
        });
    } else if (!isEmpty && selectedFilter === 'CUSTOM') {
        filteredValues = checkEquality(data, dataFilter, 'contrato');
    } else filteredValues = data;

    return (
        <div
            className={
                (filteredValues?.length > 0 &&
                    `w-full bg-white grid grid-cols-6 gap-6  p-4 flex-row`) ||
                `w-full flex items-center justify-center bg-white p-4`
            }
        >
            {filteredValues?.length > 0 ? (
                filteredValues?.map((key) => {
                    const data = new Date(key?.created_at).toLocaleString({
                        hourCycle: 'h23',
                        timeZone: 'America/Sao_Paulo',
                    });

                    return (
                        <div className="flex flex-col border-gray-500 rounded-[30rem] items-center border-[1rem] h-[250rem] w-[225rem]">
                            <span className="text-[16rem] text-center h-[35rem] overflow-hidden text-ellipsis w-fit p-2 opacity-75 font-bold">
                                CONTRATO - {key?.nome}
                            </span>

                            <p className="text-[12rem] opacity-75">{data}</p>

                            {key.status === 'sent' ? (
                                <p className="bg-[#EFEF] text-[12rem] w-full opacity-75 text-center">
                                    Aguardando
                                </p>
                            ) : (
                                <p className="bg-[var(--primary)] text-[12rem] text-white text-center w-full ">
                                    Assinado
                                </p>
                            )}

                            {key?.assinaturas.map((assinatura, index) => (
                                <>
                                    {assinatura?.status == 'assinado' ? (
                                        <div className="flex flex-row w-full mt-2 px-2 gap-1 items-center text-center">
                                            <IoIosCheckmarkCircleOutline className="fill-[var(--primary)] w-[16rem] h-[16rem]" />

                                            <p className="text-[14rem] text-[var(--primary)]">
                                                Assinatura {index + 1}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-row px-2 mt-2 gap-1 items-center w-full">
                                            <CiClock2 size={16} />

                                            <p className="text-[14rem]">
                                                Assinatura {index + 1}
                                            </p>
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                    );
                })
            ) : (
                <p className="text-sm font-bold">NÃO HÁ DADOS</p>
            )}
        </div>
    );
};

/** @format */
import React from 'react';

import { useGetCity } from '../../../hooks/useGetCity';

import { ufs } from '../../../utils/estados';

export const Ufs = ({
    getCidades,
    cidades,
    errors,
    register,
    setEmailToAdd,
    emailToAdd,
    name,
}) => {
    const { setUf, cities } = useGetCity();

    return (
        <div>
            <div className="w-[100%] flex flex-row items-center justify-between h-[45rem] border-[1rem] border-black gap-2 pl-1">
                <label className="text-lg border-none">
                    Estado
                    {errors?.estadoCargos && (
                        <span className="text-red-500 text-sm">
                            {errors.estado.message}
                        </span>
                    )}
                </label>

                <div className="h-[100%] flex justify-center">
                    <select
                        className="text-lg border-none text-center pl-2 w-[225rem]"
                        {...register('estado', {
                            onChange: (e) => {
                                getCidades(e.target.value, false);
                            },
                        })}
                        defaultValue={'n/a'}
                    >
                        <option disabled value={'n/a'}>
                            Selecione um Estado
                        </option>

                        {ufs.map((uf, i) => (
                            <option
                                className="text-lg bg-white"
                                value={uf.value}
                                key={i}
                            >
                                {uf.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="w-[100%] flex flex-row items-center justify-between h-[45rem] border-[1rem] border-black gap-2 pl-1">
                <label className="text-lg">
                    Cidade da Franquia:
                    {errors.CidadeCargos && (
                        <span className="text-red-500 text-sm">
                            {errors.cidade.message}
                        </span>
                    )}
                </label>
                <div className="h-[100%] flex justify-center">
                    <select
                        className="text-lg border-none text-center pl-2 w-[240rem]"
                        {...register('cidade')}
                        defaultValue={'n/a'}
                    >
                        <option disabled value={'n/a'}>
                            Selecione uma Cidade
                        </option>

                        {cidades?.cidadeEstado?.map((cidade, index) => (
                            <option
                                className="text-lg bg-white"
                                value={cidade?.value}
                                key={index}
                            >
                                {cidade?.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

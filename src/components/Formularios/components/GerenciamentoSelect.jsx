import { useState } from "react";
import { useGetCity } from "../../../hooks/useGetCity";
import { ufs } from "../../../utils/estados";

export const GerenciamentoSelect = ({label, option, arr, register, nome, onChange, uf}) => {

    const [setUf, cities] = useGetCity()

    return (
        <div className="w-[100%] flex flex-row items-center justify-between h-[45rem] border-[1rem] border-black gap-2 pl-1">
            <label className="text-lg">{label}</label>
            <div className="h-[100%] flex justify-center">
                <select
                    className="text-lg border-none text-center pl-2 w-[225rem]"
                    defaultValue={'n/a'}
                >
                    <option disabled selected value={'n/a'}>
                        {option}
                    </option>


                    {arr?.map((e, i) => (
                        
                        <opti
                            onChange={(e) => setUf(e.target.value)}
                            className="text-lg bg-white"
                            value={e.value}
                            uf={e}
                            key={i}
                            {...register(nome, {onChange})}
                        >
                            {e.label}
                        </opti>
                    ))}
                </select>
            </div>
        </div>
    );
};

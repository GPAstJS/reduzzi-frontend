/** @format */

import React from 'react';

import InputMask from 'react-input-mask';

export const GerenciamentoInput = ({
    label,
    placeholder,
    register,
    nome,
    error,
    mask,
    isSubmitted,
}) => {
    const InputComponent = mask ? InputMask : 'input'; //testa se vai usar a mascara ou nao

    return (
        <div className="w-[100%] flex flex-col h-[auto] border-[1rem] border-black gap-2 pl-1">
            <label className="text-lg border-none">
                {label}
                {isSubmitted && error && (
                    <span className="text-red-500 h-[20rem] text-[16rem] outline-none focus-visible:outline-none">
                        {error.message}
                    </span>
                )}
            </label>
            <InputComponent //máscara
                mask={mask}
                placeholder={placeholder}
                className="h-[20rem] text-[16rem] outline-none focus-visible:outline-none"
                {...register(nome)}
            />
        </div>
    );
};

/** @format */

import { useState, useContext } from 'react';

import { ContatosContext } from '../../../contexts/ContatosContext';

export const Historico = ({ isHoverEffect, data, register, contacts }) => {
    const { contactSelect } = useContext(ContatosContext);

    return (
        <div className="flex flex-col gap-y-6 overflow-auto h-[300rem] bg-white p-6 rounded-[5rem] w-[400rem]">
            <div className="flex flex-row items-center justify-between">
                <span className="text-base font-bold text-[#053C5C]">
                    Histórico
                </span>
            </div>

            {!isHoverEffect && (
                <textarea
                    {...register('historico')}
                    placeholder={contacts?.historico || 'Nada por aqui...'}
                    className="text-base border-2 border-black h-[100%]"
                />
            )}

            {isHoverEffect && (
                <textarea
                    placeholder={contacts[0]?.historico || 'Nada por aqui...'}
                    className="text-base border-2 border-black h-[100%]"
                />
            )}
        </div>
    );
};

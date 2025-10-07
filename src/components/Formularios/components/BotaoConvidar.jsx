/** @format */

import React, { useState } from 'react';

import { CgSpinner } from 'react-icons/cg';

export const BotaoConvidar = ({ onClick, label }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);

        try {
            await onClick();
        } catch (error) {
            console.error('Erro ao enviar:', error);
        } finally {
            setIsLoading(false);
        }
    };

    console.debug('isloading', isLoading);

    return (
        <button
            className="bg-[var(--primary)] text-white text-lg w-[200rem] flex items-center justify-center"
            onClick={handleClick}
            disabled={isLoading}
        >
            {isLoading ? (
                <CgSpinner className="animate-spin w-[25rem] h-[25rem]" />
            ) : (
                label
            )}
        </button>
    );
};

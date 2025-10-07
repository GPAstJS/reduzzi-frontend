/** @format */

import React from 'react';

export const InviteEmail = ({ nome, register, error, label }) => {
    return (
        <div className="flex flex-col mb-5 relative">
            {label && (
                <label htmlFor="emailInvited" className="text-lg mb-2">
                    {label}
                </label>
            )}

            <div className="flex items-center">
                <input
                    id={nome}
                    className="border-none border-r-[1rem] w-[250rem] border-black text-lg outline-none px-4 py-2 h-10 leading-[2rem] placeholder:text-gray-500"
                    placeholder="Convidar por e-mail"
                    {...register(nome)}
                    type="email"
                />

                {error && (
                    <span className="text-red-500 h-[20rem] text-[16rem] outline-none focus-visible:outline-none">
                        {error.message}
                    </span>
                )}
            </div>
        </div>
    );
};

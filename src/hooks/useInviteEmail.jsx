/** @format */

import { useState } from 'react';

import { toast } from 'react-toastify';

export const useInviteEmail = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [cargo, setCargo] = useState('franqueado');

    const inviteUser = async (data) => {
        console.debug('data', data);

        if (!data.email) {
            alert('Preencha o campo de e-mail');

            return;
        }

        setIsLoading(true);

        const result = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/organizacoes/invite`,
            {
                body: JSON.stringify({ ...data, emailConvite: data?.email }),
                method: 'POST',
                credentials: 'include',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );

        setIsLoading(false);

        if (result.status === 200 || result.status === 201) {
            return toast('Convite Enviado!', {
                position: 'top-right',
                type: 'success',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                className: '[&_div]:text-[15rem]',
                theme: 'dark',
            });
        }

        return toast('Tivemos um Erro!', {
            position: 'top-right',
            type: 'error',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            className: '[&_div]:text-[15rem]',
            progress: undefined,
            theme: 'dark',
        });
    };

    return {
        cargo,
        setCargo,
        inviteUser,
        isLoading,
    };
};

/** @format */

import { useEffect, useState } from 'react';

export const useGetUsuario = () => {
    const [usuario, setUsuario] = useState();

    useEffect(() => {
        const fetchUsuario = async () => {
            const fetchedData = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/user`,
                {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            const result = await fetchedData.json();

            if (fetchedData.status === 401) {
                return false;
            }

            if (!fetchedData.ok) {
                throw new Error('Erro ao buscar usuários');
            }

            setUsuario(result);
        };

        fetchUsuario();
    }, []);

    return { usuario };
};

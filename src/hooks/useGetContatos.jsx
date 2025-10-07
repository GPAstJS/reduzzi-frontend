/** @format */
import { useEffect, useContext } from 'react';

import { ContatosContext } from '../contexts/ContatosContext';

export const useGetContatos = () => {
    const { contacts, setContacts } = useContext(ContatosContext);

    useEffect(() => {
        const getContacts = async () => {
            try {
                const result = await fetch(
                    `${import.meta.env.VITE_BACKEND_URL}/contatos`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                    },
                );

                if (!result.ok)
                    console.error('We had a error fetching data...');

                const data = await result.json();

                setContacts(data);
            } catch (error) {
                console.error(error);
            }
        };

        getContacts();
    }, []);

    return { contacts };
};

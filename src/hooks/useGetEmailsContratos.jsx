/** @format */

import { useEffect, useState } from 'react';

export const useGetEmailContratos = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const getEmails = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_BACKEND_URL}/user/emails`,
                    {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                        method: 'GET',
                    },
                );

                const data = await response.json();

                setEmails(data);
            } catch (error) {
                console.error(error);
            }
        };

        getEmails();
    }, []);

    return {
        emails,
    };
};

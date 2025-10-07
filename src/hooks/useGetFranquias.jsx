/** @format */

import { useEffect, useState } from 'react';

export const useGetFranquias = () => {
    const [franquias, setFranquias] = useState([]);

    useEffect(() => {
        const fetchFranquias = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_BACKEND_URL}/organizations/franquias`,
                    {
                        method: 'GET',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                );

                setFranquias(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFranquias();
    }, []);

    return {
        franquias,
    };
};

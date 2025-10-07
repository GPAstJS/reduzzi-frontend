/** @format */

import { useState } from 'react';

export const useGetUsers = () => {
    const [dataUsers, setDataUsers] = useState([]);

    const fetchUsers = async (id) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/users/franquia?id=${id}`,
                {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error('Erro ao buscar franquias');
            }

            setDataUsers({ users: result.users, franquia: result.franquia });
        } catch (error) {
            console.error(error);
        }
    };

    return { dataUsers, fetchUsers };
};

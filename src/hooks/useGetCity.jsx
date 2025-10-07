/** @format */

import { useState, useEffect } from 'react';

export const useGetCity = () => {
    const [cidades, setCidades] = useState({
        cidadeEstado: null,
        cidadeEstadoAtuacao: null,
    });

    const getCidades = async (estadoAlvo, cidadeAtuacao) => {
        const result = await fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoAlvo.toLowerCase()}/distritos?orderBy=nome`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );

        if (!result.ok) {
            console.error(
                'We had an error on fetching the city: ',
                result.statusText,
            );
            return;
        }

        const data = await result.json();

        let cidadesArr = [];

        data.forEach((city) => {
            cidadesArr.push({ label: city.nome, value: city.nome });
        });

        if (cidadeAtuacao) {
            setCidades({ ...cidades, cidadeEstadoAtuacao: cidadesArr });
        } else {
            setCidades({ ...cidades, cidadeEstado: cidadesArr });
        }
    };

    return { cidades, getCidades };
};

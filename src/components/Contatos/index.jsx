/** @format */

import { useContext, useState, useEffect, useMemo } from 'react';

import { Classificado } from '../../constants/enums';

import { AuthContext } from '../../contexts/AuthContext';
import { ContatosContext } from '../../contexts/ContatosContext';

import { useGetContatos } from '../../hooks/useGetContatos';

import { dataVisibility } from '../../utils/dataVisibility';
import { filterFunction } from '../../utils/filterFunction';

import { FloatMenu } from './components/FloatMenu';
import { StatusComponent } from './components/StatusComponente';
import { TrabalhadoresComponent } from './components/TrabalhadoresComponent';

const renders = {
    status: (key) => key && StatusComponent(key),
    trabalhadores: (key) => TrabalhadoresComponent(key),
};

export const Contatos = ({
    setContactDataOpened,
    contactDataOpened,
    selectedFilter,
    dataFilter,
    scrollRef,
}) => {
    const { checked, setContactSelect } = useContext(ContatosContext);

    const { currentUser } = useContext(AuthContext);

    const { contacts } = useGetContatos();

    const [isHovering, setIsHovering] = useState({ status: false, x: 0, y: 0 });

    const [keys, setKeys] = useState([]);

    const filteredValues = useMemo(() => {
        const filtered = filterFunction(contacts, dataFilter, selectedFilter);
        return dataVisibility(
            filtered,
            Object.keys(checked).length > 0
                ? checked
                : Classificado[currentUser?.user?.occupation ?? 'DEFAULT'] ??
                      Classificado['DEFAULT'],
        );
    }, [contacts, dataFilter, selectedFilter, checked]);

    useEffect(() => {
        if (filteredValues?.length > 0)
            setKeys(Object.keys(filteredValues[0]?.data));
    }, [filteredValues]);

    console.debug(filteredValues, 'keys', keys);

    return (
        <div className='className="rounded-[10rem] w-full relative flex flex-col p-[8rem] rounded bg-white'>
            {filteredValues?.length > 0 ? (
                <div className="w-full overflow-auto h-[400rem]">
                    <table className="border-collapse w-full">
                        <thead className="sticky top-0 bg-white z-10">
                            <tr className="text-left">
                                {keys?.map((key, index) => {
                                    return (
                                        <th
                                            key={index}
                                            className="text-xl w-fit px-2"
                                        >
                                            {key.charAt(0)?.toUpperCase() +
                                                key?.slice(1)}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>

                        <tbody>
                            {filteredValues?.map((contact, index) => (
                                <tr
                                    onClick={() => {
                                        setContactDataOpened(
                                            !contactDataOpened,
                                        );
                                        setContactSelect(
                                            contacts.filter(
                                                (contato) =>
                                                    contato.id === contact.id &&
                                                    contato,
                                            )[0],
                                        );
                                    }}
                                    className="relative border-b-[2rem] border-black hover:bg-gray-400"
                                    key={index}
                                >
                                    {keys?.map((key, index) => {
                                        return (
                                            <td
                                                key={index}
                                                className="text-sm whitespace-nowrap px-2 hover:cursor-pointer py-2"
                                                onMouseEnter={(e) => {
                                                    setIsHovering({
                                                        status: true,
                                                        id: contact.id,
                                                        x: e.clientX - 130,
                                                        y:
                                                            (selectedFilter !==
                                                                'CUSTOM' &&
                                                                e.clientY -
                                                                    240) ||
                                                            (scrollRef.current
                                                                .scrollTop +
                                                                300 >
                                                            scrollRef.current
                                                                .scrollTopMax //a posição do scroll é maior que o tamanho total do scroll
                                                                ? scrollRef
                                                                      .current
                                                                      .scrollTop +
                                                                  e.clientY -
                                                                  700
                                                                : scrollRef
                                                                      .current
                                                                      .scrollTop +
                                                                  e.clientY -
                                                                  400),
                                                    });
                                                }}
                                                onMouseLeave={() =>
                                                    setIsHovering({
                                                        status: false,
                                                        x: 0,
                                                        y: 0,
                                                    })
                                                }
                                            >
                                                {typeof renders[key] ===
                                                'function'
                                                    ? renders[key](
                                                          contact?.data[key],
                                                      )
                                                    : contact?.data[key]}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-sm py-2 w-full text-center font-bold">
                    NÃO HÁ DADOS
                </p>
            )}

            {isHovering.status && (
                <FloatMenu
                    contacts={contacts}
                    id={isHovering.id}
                    status={isHovering.status}
                    mousex={isHovering.x}
                    mousey={isHovering.y}
                />
            )}
        </div>
    );
};

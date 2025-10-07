/** @format */

import { useState, createContext, useContext } from 'react';

import { AuthContext } from './AuthContext';

import { Classificado } from '../constants/enums';

export const ContatosContext = createContext();

export const ContatosProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [checked, setChecked] = useState({});
    const [contactSelect, setContactSelect] = useState();

    const { currentUser } = useContext(AuthContext);

    const populateChecked = () => {
        if (contacts.length > 0) {
            let obj = {};

            Object.keys(contacts[0]).forEach((key) => {
                obj[key] = false;
            });

            obj = {
                ...obj,
                ...(Classificado[currentUser?.user?.occupation ?? 'DEFAULT'] ??
                    Classificado['DEFAULT']),
            };

            setChecked(obj);
        }
    };

    return (
        <ContatosContext.Provider
            value={{
                contacts,
                checked,
                setContacts,
                setChecked,
                populateChecked,
                contactSelect,
                setContactSelect,
            }}
        >
            {children}
        </ContatosContext.Provider>
    );
};

/** @format */

import { Historico } from '../../Formularios/components/Historico';

export const FloatMenu = ({ mousex, mousey, contacts, id }) => {
    const actualContact = contacts.filter((contact) => contact.id === id);

    return (
        <div
            style={{
                top: `${mousey}rem`,
                left: `${mousex}rem`,
            }}
            className={`absolute border-2 border-black z-20`}
        >
            <Historico isHoverEffect={true} contacts={actualContact} />
        </div>
    );
};

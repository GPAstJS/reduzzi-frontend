/** @format */

import { useState } from 'react';

import { MenuLateral } from '../components/MenuLateral';

import { AreaPrincipal } from './areaPrincipal';

export default function Layout() {
    const [menuReduzido, setMenuReduzido] = useState(true);

    const [telaAtual, setTelaAtual] = useState({
        controleContatos: true,
        contratos: false,
        gerenciamento: false,
        relatorios: false,
    });

    return (
        <div className={` flex flex-row pt-5 bg-[var(--primary)] h-[100vh]`}>
            <MenuLateral
                menuReduzido={menuReduzido}
                setMenuReduzido={setMenuReduzido}
                telaAtual={telaAtual}
                setTelaAtual={setTelaAtual}
            />

            <AreaPrincipal
                telaAtual={telaAtual}
                setTelaAtual={setTelaAtual}
                menuReduzido={menuReduzido}
            />
        </div>
    );
}

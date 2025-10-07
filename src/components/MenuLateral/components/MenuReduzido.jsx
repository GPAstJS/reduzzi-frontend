/** @format */

import { PiFiles } from 'react-icons/pi';
import { PiNetworkThin } from 'react-icons/pi';
import { VscGraphLine } from 'react-icons/vsc';
import { RiLogoutBoxLine } from 'react-icons/ri';

import { LogoIconSvg } from '../../Svgs/LogoIconSvg';

import { MenuIcon } from './MenuIcon';

export const MenuReduzido = ({
    setMenuReduzido,
    telaAtual,
    setTelaAtual,
} = props) => {
    return (
        <div
            className="w-[100rem] flex flex-col items-center relative text-white bg-[var(--primary)]"
            onMouseEnter={() => setMenuReduzido(false)}
            onMouseLeave={() => setMenuReduzido(true)}
        >
            <div className="mt-[70rem]">
                <LogoIconSvg height={'50rem'} width={'50rem'} />
            </div>

            <div className="flex flex-col items-center w-[100%] mt-20">
                <MenuIcon
                    reduzido={true}
                    Icon={
                        <VscGraphLine className="ml-4 fill-[var(--icons)] w-[27rem] h-[27rem]" />
                    }
                    setTelaAtual={setTelaAtual}
                    divRendered={telaAtual.controleContatos}
                    telaSelecionada={{
                        ...Object.fromEntries(
                            Object.keys(telaAtual).map((key) => [key, false]),
                        ),
                        controleContatos: true,
                    }}
                />

                <MenuIcon
                    reduzido={true}
                    Icon={
                        <PiFiles className="ml-4 fill-[var(--icons)] w-[27rem] h-[27rem]" />
                    }
                    setTelaAtual={setTelaAtual}
                    divRendered={telaAtual.contratos}
                    telaSelecionada={{
                        ...Object.fromEntries(
                            Object.keys(telaAtual).map((key) => [key, false]),
                        ),
                        contratos: true,
                    }}
                />
            </div>

            <div className="flex flex-col mt-[200rem]">
                <MenuIcon
                    reduzido={true}
                    Icon={
                        <PiNetworkThin className="ml-4 fill-[var(--icons)] w-[27rem] h-[27rem]" />
                    }
                    setTelaAtual={setTelaAtual}
                    divRendered={telaAtual.gerenciamento}
                    telaSelecionada={{
                        ...Object.fromEntries(
                            Object.keys(telaAtual).map((key) => [key, false]),
                        ),
                        gerenciamento: true,
                    }}
                />
                {/* <MenuIconFolded
                    Icon={
                        <CiUser className="ml-2 fill-[var(--icons)] w-[27rem] h-[27rem]" />
                    }
                    setActualMenuSession={setActualMenuSession}
                    divRendered={actualMenuSession.div5}
                    divToChange={{
                        div1: false,
                        div2: false,
                        div3: false,
                        div4: false,
                        div5: true,
                        div6: false,
                    }}
                /> */}

                <div className="flex w-[100%] justify-center hover:cursor-pointer mt-4">
                    <div className="w-[60rem] h-[60rem]">
                        <RiLogoutBoxLine className="ml-4 fill-[var(--icons)] w-[27rem] h-[27rem]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

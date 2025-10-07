/** @format */

import { PiFiles } from 'react-icons/pi';
import { PiNetworkThin } from 'react-icons/pi';
import { VscGraphLine } from 'react-icons/vsc';
import { RiLogoutBoxLine } from 'react-icons/ri';

import { LogoIconSvg } from '../../Svgs/LogoIconSvg';

import { MenuIcon } from './MenuIcon';

export const Menu = ({ setMenuReduzido, telaAtual, setTelaAtual }) => {
    return (
        <div
            className={`w-[300rem] flex flex-col items-center relative text-white bg-[var(--primary)] z-0`}
            onMouseEnter={() => setMenuReduzido(false)}
            onMouseLeave={() => setMenuReduzido(true)}
        >
            <div>
                <div className="pb-5 mt-12 bg-transparent border-b-white border-b-2">
                    <LogoIconSvg height={'100rem'} width={'220rem'} />
                </div>

                <div className="relative w-[220rem]">
                    <div className="flex flex-start flex-col mt-12 gap-y-8">
                        <MenuIcon
                            reduzido={false}
                            Icon={
                                <VscGraphLine className="ml-2 fill-[var(--icons)] w-[27rem] h-[27rem]" />
                            }
                            text="Controle de contatos"
                            setTelaAtual={setTelaAtual}
                            divRendered={telaAtual.controleContatos}
                            telaSelecionada={{
                                ...Object.fromEntries(
                                    Object.keys(telaAtual).map((key) => [
                                        key,
                                        false,
                                    ]),
                                ),
                                controleContatos: true,
                            }}
                        />

                        <MenuIcon
                            reduzido={false}
                            Icon={
                                <PiFiles className="ml-2 fill-[var(--icons)] w-[27rem] h-[27rem]" />
                            }
                            text="Contratos"
                            setTelaAtual={setTelaAtual}
                            divRendered={telaAtual.contratos}
                            telaSelecionada={{
                                ...Object.fromEntries(
                                    Object.keys(telaAtual).map((key) => [
                                        key,
                                        false,
                                    ]),
                                ),
                                contratos: true,
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-start flex-col relative mt-[250rem] gap-y-8 ">
                    <MenuIcon
                        reduzido={false}
                        Icon={
                            <PiNetworkThin className="ml-2 fill-[var(--icons)] w-[27rem] h-[27rem]" />
                        }
                        text="Gerenciamento"
                        setTelaAtual={setTelaAtual}
                        divRendered={telaAtual.gerenciamento}
                        telaSelecionada={{
                            ...Object.fromEntries(
                                Object.keys(telaAtual).map((key) => [
                                    key,
                                    false,
                                ]),
                            ),
                            gerenciamento: true,
                        }}
                    />
                    {/* <MenuIcon
                        Icon={
                            <CiUser className="ml-2 fill-[var(--icons)] w-[27rem] h-[27rem]" />
                        }
                        text="Administração"
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
                    <div
                        onClick={() => {
                            window.location.href = `${import.meta.env.VITE_BACKEND_URL}/logout`;
                        }}
                        className="w-full flex flex-row gap-2 items-center hover:cursor-pointer"
                    >
                        <RiLogoutBoxLine className="ml-2 fill-[var(--icons)] w-[27rem] h-[27rem]" />
                        <h3 className="text-base">Sair</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

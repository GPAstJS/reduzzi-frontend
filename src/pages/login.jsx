/** @format */

import { useEffect } from 'react';

import { LogoSvg } from '../components/Svgs/LogoSvg';

import GoogleLogo from '../assets/images/GoogleLogo.svg';

import { useGetUsuario } from '../hooks/useGetUsuario';

export const LoginPage = () => {
    const { usuarios } = useGetUsuario();

    const login = () => {
        window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/google`;
    };

    useEffect(() => {
        if (usuarios) {
            window.location.href = '/dashboard';
        }
    }, [usuarios]);

    return (
        <div className="h-[100vh] bg-[var(--primary)]">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col h-screen w-[60%]">
                    <header className="mx-20 mt-20">
                        <LogoSvg />
                    </header>

                    <div className="my-40 mx-20">
                        <h1 className="text-3xl font-bold text-white w-[300rem]">
                            Redução de imposto de obra mais fácil do que você
                            imagina.
                        </h1>
                    </div>
                </div>

                <div className="h-screen bg-[#eef1f6] w-[40%] container flex flex-col justify-center p-20">
                    <h2 className="text-4xl font-medium text-[var(--primary)]">
                        Olá,
                    </h2>
                    <p className="text-sm">
                        Entre com e-mail e senha para acessar as suas reduções
                    </p>
                    <button
                        className="flex items-center gap-2 bg-white border-[1px] rounded-[6rem] justify-center p-2 mt-8"
                        onClick={() => login()}
                    >
                        <img
                            src={GoogleLogo}
                            alt="google image"
                            className="max-w-8"
                        />
                        <p className="text-base">Entrar com o Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

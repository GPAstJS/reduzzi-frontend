/** @format */

import { useState, useEffect, useContext, useRef } from 'react';

import { ToastContainer } from 'react-toastify';

import { AuthContext } from '../../contexts/AuthContext';

import { Header } from '../../components/Header';
import { Contatos } from '../../components/Contatos';
import { Contratos } from '../../components/Contratos';
import { GerenciamentoFranquias } from '../../components/Gerenciamento';
import { DadosContato } from '../../components/Formularios/DadosContato';
import { ContatosFilter } from '../../components/Contatos/components/ContatosFilter';

import { Relatorios } from './Relatorios';
import { CriacaoContratos } from '../../components/Contratos/components/CriacaoContratos';

export const AreaPrincipal = ({
    telaAtual,
    setTelaAtual,
    menuReduzido,
} = props) => {
    const [selectedFilter, setSelectedFilter] = useState('CUSTOM');
    const [contactDataOpened, setContactDataOpened] = useState(false);

    //usado para os inputs (cpf, client, etc...)
    const [dataFilter, setDataFilter] = useState({});

    const [checked, setChecked] = useState({});

    const [checked2, setChecked2] = useState({
        id: false,
        status: true,
        date: false,
        client: true,
        cpf: false,
        city: true,
        totalSquareMeter: false,
        fullValue: false,
        reducedValue: false,
        honorary: false,
    });
    const [contract, setContract] = useState(false);
    const [newContract, setNewContract] = useState([]);
    const [contractData, setContractData] = useState({
        assinaturas: '',
        status: '',
        tipo_ordem: '',
        jurisdicao: '',
        idioma: '',
    });

    const scrollRef = useRef(null);

    const [userValues, setUserValues] = useState({});

    const { currentUser, setCurrentUser } = useContext(AuthContext);

    useEffect(() => {
        const getUserContext = async () => {
            const result = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/user`,
                {
                    credentials: 'include',
                    withCredentials: true,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            if (result.status === 401 || !result.ok)
                window.location.href = `${import.meta.env.VITE_APP_URL}/login`;

            const payload = await result.json();

            setCurrentUser({
                ...payload,
                name: payload?.user?.email,
            });
        };

        let arrCurrentUser = Object.keys(currentUser);

        if (arrCurrentUser?.length < 1) getUserContext();
    }, []);

    console.debug(contract, 'telkadjlsakjdflk', telaAtual);

    const render = {
        controleContatos: contactDataOpened ? (
            <DadosContato
                contactDataOpened={contactDataOpened}
                setContactDataOpened={setContactDataOpened}
                setActualMenuSession={setTelaAtual}
                menuReduzido={menuReduzido}
                userValues={userValues}
                setContract={setContract}
                setUserValues={setUserValues}
            />
        ) : (
            <>
                <ContatosFilter
                    dataFilter={dataFilter}
                    setDataFilter={setDataFilter}
                    setSelectedFilter={setSelectedFilter}
                    checked={checked}
                    setChecked={setChecked}
                />

                <Contatos
                    setContactDataOpened={setContactDataOpened}
                    contactDataOpened={contactDataOpened}
                    selectedFilter={selectedFilter}
                    dataFilter={dataFilter}
                    scrollRef={scrollRef}
                />
            </>
        ),
        contratos: contract ? (
            <CriacaoContratos
                contract={contract}
                newContract={newContract}
                contractData={contractData}
                setContract={setContract}
                setNewContract={setNewContract}
                setContractData={setContractData}
            />
        ) : (
            <>
                <ContatosFilter
                    setSelectedFilter={setSelectedFilter}
                    setDataFilter={setDataFilter}
                />
                <Contratos
                    dataFilter={dataFilter}
                    selectedFilter={selectedFilter}
                />
            </>
        ),
        gerenciamento: <GerenciamentoFranquias />,
        relatorios: (
            <Relatorios
                setChecked={setChecked}
                checked={checked}
                setChecked2={setChecked2}
                checked2={checked2}
                dataFilter={dataFilter}
                setDataFilter={setDataFilter}
                selectedFilter={selectedFilter}
                setContactDataOpened={setContactDataOpened}
            />
        ),
    };

    const telaAtualKeys = Object.keys(telaAtual);

    return (
        <div
            className={`bg-[var(--white)] z-10 flex flex-col rounded-[30rem_30rem_0rem_0rem] p-12 gap-[40rem] ${
                menuReduzido ? 'w-[calc(99vw-100rem)]' : 'w-[calc(99vw-300rem)]'
            } overflow-auto scroll-smooth`}
            ref={scrollRef}
        >
            {/* chamada do toastcontainer */}
            <ToastContainer position="top-right" />

            <Header
                description={
                    (telaAtual.controleContatos && 'Controle de Contatos') ||
                    (telaAtual.contratos && 'Contratos') ||
                    (telaAtual.gerenciamento && 'Gerenciamento') ||
                    (telaAtual.relatorios && 'Administração')
                }
            />

            {render[telaAtualKeys.filter((key) => telaAtual[key] && key)]}
        </div>
    );
};

/** @format */
import 'react-toastify/dist/ReactToastify.css';

import { useContext, useEffect, useState } from 'react';

import { useForm, useFieldArray, useWatch } from 'react-hook-form';

import { IoMdArrowDropleft } from 'react-icons/io';

import { Anexos } from './components/Anexos';
import { DataInput } from './components/DataInput';
import { DateInput } from './components/DateInput';
import { Historico } from './components/Historico';
import { RadioInput } from './components/RadioInput';
import { SelectInput } from './components/SelectInput';
import { CardInfoData } from './components/CardInfoData';
import { StatusComponentSelect } from './components/StatusComponentSelect';

import { ContatosContext } from '../../contexts/ContatosContext';

import {
    bancos,
    meiTrabalhador,
    parcelasDaObra,
    honorarioPadrao,
    formaDePagamento,
    trabalhadorFuncao,
} from '../../constants/userDataConstants';

import { objectFilter } from '../../utils/objectFilter';

import { toast } from 'react-toastify';

export const DadosContato = ({
    menuReduzido,
    contactDataOpened,
    setContactDataOpened,
    setActualMenuSession,
    setContract,
}) => {
    const { contactSelect } = useContext(ContatosContext);

    const [comEntrada, setComEntrada] = useState({ sim: false, nao: false });

    const [pagHonorarios, setPagHonorarios] = useState({
        aVista: false,
        parcelado: false,
    });

    const [ecac, setEcac] = useState({
        emitido: false,
        solicitado: false,
        naoSolicitado: false,
    });

    const [rtParceiro, setRtParceiro] = useState({ sim: false, nao: false });

    const {
        register,
        setValue,
        control,
        formState: { isDirty, dirtyFields },
    } = useForm({
        defaultValues: {
            ...contactSelect,
            anexos: contactSelect?.anexos?.map((item) => ({ ...item })),
            status: contactSelect?.status,
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'anexos',
    });

    const watch = useWatch({ control: control });

    const onSubmit = async (data) => {
        const objectFiltered = objectFilter(data);

        try {
            const multiPartForm = new FormData();

            const formatedTrabalhadores = Array.from(
                Array(contactSelect?.quantTrabalhadores).keys(),
            ).map((_, i) => ({
                nome: data[`nome${i}`],
                cpf: data[`cpf${i}`],
                dataNascimento: data[`dataNasc${i}`],
                funcao: data[`funcao${i}`],
                emitiuMei: data[`emitiuMei${i}`],
            }));

            if (data?.anexos?.length > 0) {
                for (let item of data.anexos) {
                    multiPartForm.append(
                        'file',
                        ...item.arquivo,
                        item.arquivo[0].name,
                    );
                }
            }

            multiPartForm.append(
                'data',
                JSON.stringify({
                    ...objectFiltered,
                    trabalhadores: formatedTrabalhadores,
                }),
            );

            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/contatos/${
                    contactSelect?.id
                }`,
                {
                    method: 'PUT',
                    body: multiPartForm,
                },
            );

            if (!response.ok) {
                throw new Error('Erro ao salvar dados!');
            }

            toast.dismiss(1);

            toast('Salvo com sucesso!', {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                autoClose: 2000,
                type: 'success',
                toastId: 2,
                theme: 'dark',
                className: '[&_div]:text-[15rem]',
            });
        } catch (error) {
            toast.dismiss(1);

            console.error(error);

            toast(`Erro ao salvar os dados!!! ${error}`, {
                type: 'error',
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                autoClose: 5000,
                toastId: 3,
                theme: 'dark',
                className: '[&_div]:text-[15rem]',
            });
        }
    };

    const autoSave = async (data, payload) => {
        setTimeout(payload(data), 1000);
    };

    useEffect(() => {
        if (contactSelect) {
            Object.keys(contactSelect).forEach((key) => {
                setValue(key, contactSelect[key] || '');
            });
        }
    }, [contactSelect, setValue]);

    useEffect(() => {
        if (isDirty && Object.keys(dirtyFields).length > 0) {
            toast.loading('Salvando...', {
                theme: 'dark',
                toastId: 1,
                progress: false,
                className: '[&_div]:text-[15rem]',
            });

            const delayDebounceFn = setTimeout(() => {
                autoSave(watch, onSubmit);
            }, 3000);

            return () => clearTimeout(delayDebounceFn);
        }
    }, [
        // dirtyFields,
        // isDirty,
        // handleSubmit,
        Object.keys(dirtyFields).length > 0 && watch,
    ]);

    console.debug('contatos', contactSelect);

    return (
        <div className="flex gap-[30rem]">
            <div className="w-[100%] flex flex-col">
                <div className="bg-white h-[70rem] flex items-center justify-between rounded-[10rem] px-[20rem]">
                    <div className="flex items-center gap-[10rem]">
                        <div
                            onClick={() =>
                                setContactDataOpened(!contactDataOpened)
                            }
                            className="flex items-center justify-center mr-2"
                        >
                            <IoMdArrowDropleft className="mb-[2rem] w-[32rem] h-[32rem]" />

                            <p className="text-sm font-medium">Voltar</p>
                        </div>

                        <p className="text-xl text-[var(--primary)] font-bold">
                            {contactSelect?.nome || 'Sem Nome'}
                        </p>

                        <hr className="h-[40rem] border-[var(--primary)] bg-[var(--primary)] text-[var(--primary)] border-[1rem]" />

                        <p className="text-xl text-black opacity-40">
                            {contactSelect?.id}
                        </p>
                    </div>

                    <StatusComponentSelect
                        register={register}
                        placeholderData={contactSelect?.status}
                        nome={'status'}
                    />
                </div>

                <div className="flex flex-row flex-wrap gap-x-[15rem] justify-between mt-12">
                    <CardInfoData name="DADOS PESSOAIS">
                        <DataInput
                            span={'Nome do Cliente'}
                            placeholderData={
                                contactSelect?.nome || 'Não informado'
                            }
                            register={register}
                            nome={'nome'}
                        />

                        <DataInput
                            span={'CPF'}
                            disabled={true}
                            placeholderData={
                                contactSelect?.cpf || 'Não informado'
                            }
                            nome={'cpf'}
                        />
                    </CardInfoData>

                    <CardInfoData name="CONTATOS">
                        <DataInput
                            span={'Email'}
                            placeholderData={
                                contactSelect?.email || 'Não informado'
                            }
                            disabled={true}
                            register={register}
                            nome={'email'}
                        />
                        <DataInput
                            span={'Telefone do Cliente'}
                            disabled={true}
                            placeholderData={
                                contactSelect?.celular || 'Não informado'
                            }
                            register={register}
                            nome={'celular'}
                        />
                    </CardInfoData>

                    <CardInfoData name="DADOS DA OBRA">
                        <DataInput
                            span={'Tipo de proprietário'}
                            disabled={true}
                            placeholderData={'Pessoa Física'}
                            nome={'tipoProprietario'}
                        />

                        <DataInput
                            span={'Quantidade de Trabalhadores (Calculado)'}
                            disabled={true}
                            placeholderData={
                                contactSelect?.quantTrabalhadores ||
                                'Não informado'
                            }
                            nome={'quantTrabalhadores'}
                        />

                        <DataInput
                            span={'M² Área Principal'}
                            disabled={true}
                            placeholderData={
                                contactSelect?.m2Construcao || 'Não informado'
                            }
                            nome={'m2Construcao'}
                        />

                        <DataInput
                            span={'M² Área Complementar (Piscina/Quadra)'}
                            type="number"
                            onChange={(e) => Number(e.target.value)}
                            nome={'m2PiscinaQuadra'}
                            disabled={true}
                            placeholderData={
                                contactSelect?.m2PiscinaQuadra ??
                                'Não informado'
                            }
                        />

                        <DataInput
                            span={'Metro Total'}
                            // register={register}
                            disabled={true}
                            placeholderData={
                                contactSelect?.metroTotal || 'Não informado'
                            }
                            nome={'metroTotal'}
                        />

                        <DataInput
                            span={'Cidade da obra'}
                            // register={register}
                            disabled={true}
                            placeholderData={
                                contactSelect?.cidade || 'Não informado'
                            }
                            nome={'numCno'}
                        />

                        <DataInput
                            span={'Estado da obra'}
                            // register={register}
                            disabled={true}
                            placeholderData={
                                contactSelect?.ufObra || 'Não informado'
                            }
                            nome={'ufObra'}
                        />

                        <DataInput
                            span={'Data Inicio'}
                            disabled={true}
                            placeholderData={
                                contactSelect?.inicioConstrucao ||
                                'Não informado'
                            }
                            nome={'inicioConstrucao'}
                        />

                        <DataInput
                            span={'Data Término'}
                            disabled={true}
                            placeholderData={
                                contactSelect?.previsaoTermino ||
                                'Não informado'
                            }
                            nome={'previsaoTermino'}
                        />

                        <DataInput
                            span={'RMT Total da Obra'}
                            placeholderData={
                                contactSelect?.rmtObra || 'Não informado'
                            }
                            disabled={true}
                            // register={register}
                            nome={'rmtObra'}
                        />

                        <DataInput
                            span={'Valor da VAU'}
                            disabled={true}
                            placeholderData={
                                contactSelect?.valorVau || 'Não informado'
                            }
                            // register={register}
                            nome={'valorVau'}
                        />

                        <SelectInput
                            register={register}
                            nome={'parcelasDaObra'}
                            placeholderData={
                                contactSelect?.valorFinalDaObraParcelamento ||
                                'Não informado'
                            }
                            labelName={'Parcelas da Obra'}
                            array={parcelasDaObra}
                            disabled={true}
                        />

                        <DataInput
                            span={'CNO'}
                            register={register}
                            placeholderData={
                                contactSelect?.cno || 'Não informado'
                            }
                            nome={'numCno'}
                        />

                        <div className="flex flex-col">
                            <label className="text-xs opacity-75">
                                Com entrada?
                            </label>

                            <div className="flex flex-row justify-between w-[100rem]">
                                <RadioInput
                                    onClick={() => {
                                        setComEntrada({
                                            sim: true,
                                            nao: false,
                                        });
                                    }}
                                    checked={comEntrada.sim}
                                    radioLabel={'Sim'}
                                    register={register}
                                    nome={'comEntrada'}
                                    value={'sim'}
                                />

                                <RadioInput
                                    onClick={() => {
                                        setComEntrada({
                                            sim: false,
                                            nao: true,
                                        });
                                    }}
                                    checked={comEntrada.nao}
                                    radioLabel={'Nao'}
                                    register={register}
                                    nome={'comEntrada'}
                                    value={'nao'}
                                />
                            </div>
                        </div>

                        <DataInput
                            span={'Valor da Entrada'}
                            type="number"
                            placeholderData={
                                contactSelect?.valorDaEntradaParcelamentoTotal ||
                                'Não informado'
                            }
                            register={register}
                            nome={'valorDaEntradaParcelamentoTotal'}
                            onChange={(e) => Number(e.target.value)}
                            valueAsNumber={true}
                        />

                        <DataInput
                            span={'Valor Final da Entrada'}
                            type="number"
                            placeholderData={
                                contactSelect?.valorFinalDaEntradaParcelamento ||
                                'Não informado'
                            }
                            register={register}
                            nome={'valorFinalDaEntradaParcelamento'}
                            onChange={(e) => Number(e.target.value)}
                            valueAsNumber={true}
                        />

                        <DataInput
                            span={'Valor do Parcelamento Total'}
                            type="number"
                            placeholderData={
                                contactSelect?.valorDoParcelamentoTotal ||
                                'Não informado'
                            }
                            register={register}
                            nome={'valorDoParcelamentoTotal'}
                            onChange={(e) => Number(e.target.value)}
                            valueAsNumber={true}
                        />

                        <DataInput
                            span={'Valor Mês Retroativo'}
                            type="number"
                            placeholderData={
                                contactSelect?.valorMesRetroativo ||
                                'Não informado'
                            }
                            register={register}
                            nome={'valorMesRetroativo'}
                            onChange={(e) => Number(e.target.value)}
                            valueAsNumber={true}
                        />

                        <DataInput
                            span={'Valor Última Darf'}
                            type="number"
                            placeholderData={
                                contactSelect?.valorFinalDaObra ||
                                'Não informado'
                            }
                            register={register}
                            nome={'valorFinalDaObra'}
                            onChange={(e) => Number(e.target.value)}
                            valueAsNumber={true}
                        />

                        <SelectInput
                            register={register}
                            placeholderData={contactSelect?.banco}
                            nome={'banco'}
                            labelName={'Banco'}
                            array={bancos}
                        />

                        <SelectInput
                            register={register}
                            placeholderData={contactSelect?.formaDePagamento}
                            nome={'formaDePagamento'}
                            labelName={'Forma de Pagamento'}
                            array={formaDePagamento}
                        />

                        <DataInput
                            span={'Agência Bancária'}
                            placeholderData={
                                contactSelect?.agenciaBancaria ||
                                'Não informado'
                            }
                            register={register}
                            nome={'agenciaBancaria'}
                        />

                        <DataInput
                            span={'Conta Corrente com Dígito Verificador'}
                            placeholderData={
                                contactSelect?.contaBancaria || 'Não informado'
                            }
                            register={register}
                            nome={'contaBancaria'}
                        />

                        <div className="flex flex-col">
                            <label
                                className="text-xs opacity-75"
                                htmlFor="formaPagamentoHonorarios"
                            >
                                Forma de Pagamento dos Honorários
                            </label>

                            <div className="flex flex-row w-fit gap-x-2 justify-between">
                                <RadioInput
                                    onClick={() => {
                                        setPagHonorarios({
                                            aVista: true,
                                            parcelado: false,
                                        });
                                    }}
                                    checked={pagHonorarios.aVista}
                                    value="aVista"
                                    register={register}
                                    nome={'formaPagamentoHonorarios'}
                                    radioLabel={'À vista'}
                                />

                                <RadioInput
                                    onClick={() => {
                                        setPagHonorarios({
                                            aVista: false,
                                            parcelado: true,
                                        });
                                    }}
                                    checked={pagHonorarios.parcelado}
                                    value="parcelado"
                                    register={register}
                                    nome={'formaPagamentoHonorarios'}
                                    radioLabel={'Parcelado'}
                                />
                            </div>
                        </div>

                        <DataInput
                            span={'Valor da Parcela dos Honorários'}
                            placeholderData={
                                contactSelect?.valorParcelaHonorarios ||
                                'Não informado'
                            }
                            register={register}
                            nome={'valorParcelaHonorarios'}
                        />
                        <DataInput
                            span={'Valor da RT'}
                            placeholderData={
                                contactSelect?.valorRT || 'Não informado'
                            }
                            register={register}
                            nome={'valorRT'}
                        />

                        <DataInput
                            span={'Número do IPTU'}
                            placeholderData={
                                contactSelect?.numeroIptu || 'Não informado'
                            }
                            register={register}
                            nome={'numeroIptu'}
                        />

                        <DataInput
                            span={'Lote Nº'}
                            placeholderData={
                                contactSelect?.numeroLote || 'Não informado'
                            }
                            register={register}
                            nome={'numeroLote'}
                        />

                        <DataInput
                            span={'CEP'}
                            placeholderData={
                                contactSelect?.cep || 'Não informado'
                            }
                            register={register}
                            nome={'cep'}
                        />

                        <DataInput
                            span={'Logradouro'}
                            placeholderData={
                                contactSelect?.logradouro || 'Não informado'
                            }
                            register={register}
                            nome={'logradouro'}
                        />

                        <DataInput
                            span={'Nº da Obra'}
                            placeholderData={
                                contactSelect?.numDaObra || 'Não informado'
                            }
                            register={register}
                            nome={'numDaObra'}
                        />

                        <DataInput
                            span={'Nome do Condomínio'}
                            placeholderData={
                                contactSelect?.nomeCondominio || 'Não informado'
                            }
                            register={register}
                            nome={'nomeCondominio'}
                        />

                        <DataInput
                            span={'Bairro'}
                            placeholderData={
                                contactSelect?.bairro || 'Não informado'
                            }
                            register={register}
                            nome={'bairro'}
                        />

                        <DataInput
                            span={'Plus Code'}
                            placeholderData={
                                contactSelect?.plusCode || 'Não informado'
                            }
                            register={register}
                            nome={'plusCode'}
                        />

                        <DataInput
                            span={'Alvara (M² Total)'}
                            placeholderData={
                                contactSelect?.alvaraMetroTotal ||
                                'Não informado'
                            }
                            register={register}
                            nome={'alvaraMetroTotal'}
                        />

                        <DataInput
                            span={'Data de Emissão do Alvará'}
                            placeholderData={
                                contactSelect?.dataEmissaoAlvara ||
                                'Não informado'
                            }
                            register={register}
                            nome={'dataEmissaoAlvara'}
                        />

                        <DataInput
                            span={
                                'Habita-se / Certificado de Conclusão da Obra'
                            }
                            placeholderData={
                                contactSelect?.dataEmissaoAlvara ||
                                'Não informado'
                            }
                            register={register}
                            nome={'dataEmissaoAlvara'}
                        />

                        <div className="flex flex-col">
                            <label className="text-xs opacity-75">
                                Liberação do E-CAC realizada?
                            </label>

                            <div className="flex flex-row w-fit gap-2 justify-between">
                                <RadioInput
                                    onClick={() => {
                                        setEcac({
                                            emitido: true,
                                            solicitado: false,
                                            naoSolicitado: false,
                                        });
                                    }}
                                    checked={ecac.emitido}
                                    value="emitido"
                                    register={register}
                                    nome={'liberacaoEcac'}
                                    radioLabel={'Emitido'}
                                />

                                <RadioInput
                                    onClick={() => {
                                        setEcac({
                                            emitido: false,
                                            solicitado: true,
                                            naoSolicitado: false,
                                        });
                                    }}
                                    checked={ecac.solicitado}
                                    value="solicitado"
                                    register={register}
                                    nome={'liberacaoEcac'}
                                    radioLabel={'Solicitaddo'}
                                />

                                <RadioInput
                                    onClick={() => {
                                        setEcac({
                                            emitido: false,
                                            solicitado: false,
                                            naoSolicitado: true,
                                        });
                                    }}
                                    checked={ecac.solicitado}
                                    value="naoSolicitado"
                                    register={register}
                                    nome={'liberacaoEcac'}
                                    radioLabel={'Nao solicitado'}
                                />
                            </div>
                        </div>
                    </CardInfoData>

                    <CardInfoData name="DADOS DA REDUÇÃO">
                        <DataInput
                            span={'Valor Entrada Total'}
                            disabled={true}
                            placeholderData={
                                contactSelect?.valorMesRetroativo ??
                                'Não informado'
                            }
                            type="number"
                            register={register}
                            nome={'totalImpostoSemReducao'}
                        />

                        <DataInput
                            span={'Valor Regra Antiga'}
                            disabled={true}
                            placeholderData={
                                contactSelect?.totalImpostoSemReducao ||
                                'Não informado'
                            }
                            type="number"
                            register={register}
                            nome={'totalImpostoSemReducao'}
                        />

                        <DataInput
                            span={'Valor Regra Atual'}
                            disabled={true}
                            placeholderData={
                                contactSelect?.regraAtual || 'Não informado'
                            }
                            register={register}
                            type="number"
                            nome={'regraAtual'}
                            valueAsNumber={true}
                            onChange={(e) => Number(e.target.value)}
                        />

                        <DataInput
                            span={'Valor Reduzido'}
                            disabled={true}
                            placeholderData={
                                contactSelect?.regraAtual || 'Não informado'
                            }
                            register={register}
                            type="number"
                            nome={'regraAtual'}
                            valueAsNumber={true}
                            onChange={(e) => Number(e.target.value)}
                        />

                        <DataInput
                            span={'Economia Gerada'}
                            placeholderData={
                                contactSelect?.valorEconomia || 'Não informado'
                            }
                            disabled={true}
                            register={register}
                            type="number"
                            nome={'valorEconomia'}
                        />

                        <DataInput
                            span={'Meses a Lançar'}
                            placeholderData={
                                contactSelect?.mesesALancar || 'Não informado'
                            }
                            disabled={true}
                            // register={register}
                            type="number"
                            nome={'mesesALancar'}
                        />

                        <DataInput
                            span={'Valor de Messes a Lançar'}
                            placeholderData={
                                contactSelect?.valorMesRetroativo ??
                                'Não informado'
                            }
                            disabled={true}
                            // register={register}
                            type="number"
                            nome={'valorMesRetroativo'}
                        />

                        <DataInput
                            span={'Metragem a Lançar'}
                            placeholderData={
                                contactSelect?.metragemPorMes || 'Não informado'
                            }
                            disabled={true}
                            // register={register}
                            type="number"
                            nome={'metragemPorMes'}
                        />
                    </CardInfoData>

                    <CardInfoData name="PAGAMENTO DO HONORÁRIO">
                        <SelectInput
                            register={register}
                            placeholderData={
                                contactSelect?.honorarioPadrao ||
                                honorarioPadrao[0]
                            }
                            labelName={'Honorário Padrão Reduzzi'}
                            array={honorarioPadrao}
                            nome="honorarioPadrao"
                            // disabled={true}
                        />

                        <DataInput
                            span={'Metragem a Lançar'}
                            placeholderData={
                                contactSelect?.metragemPorMes || 'Não informado'
                            }
                            disabled={true}
                            // register={register}
                            type="number"
                            nome={'metragemPorMes'}
                        />

                        <div className="flex flex-col">
                            <label
                                className="text-xs opacity-75"
                                htmlFor="formaPagamentoHonorarios"
                            >
                                Tem RT Parceiro ou Algum Cliente que Indicou?
                            </label>
                            <div className="flex flex-row justify-between w-[100rem]">
                                <RadioInput
                                    onClick={() => {
                                        setRtParceiro({
                                            sim: true,
                                            nao: false,
                                        });
                                    }}
                                    checked={rtParceiro.sim}
                                    radioLabel={'Sim'}
                                    register={register}
                                    nome={'rtParceiro'}
                                    value={'sim'}
                                />

                                <RadioInput
                                    onClick={() => {
                                        setRtParceiro({
                                            sim: false,
                                            nao: true,
                                        });
                                    }}
                                    checked={rtParceiro.nao}
                                    radioLabel={'Nao'}
                                    register={register}
                                    nome={'rtParceiro'}
                                    value={'nao'}
                                />
                            </div>
                        </div>

                        {rtParceiro.sim && (
                            <>
                                <DataInput
                                    span={'Valor da RT'}
                                    placeholderData={
                                        contactSelect?.valorRtParceiro ||
                                        'Não informado'
                                    }
                                    register={register}
                                    type="number"
                                    nome={'valorRtParceiro'}
                                />

                                <DataInput
                                    span={'Nome Do Parceiro / Cliente'}
                                    placeholderData={
                                        contactSelect?.parceiroRtNome ||
                                        'Não informado'
                                    }
                                    register={register}
                                    type="text"
                                    nome={'parceiroRtNome'}
                                />

                                <DataInput
                                    span={'Pix do Parceiro / Cliente'}
                                    placeholderData={
                                        contactSelect?.pixRtParceiro ||
                                        'Não informado'
                                    }
                                    register={register}
                                    type="text"
                                    nome={'pixRtParceiro'}
                                />

                                <DataInput
                                    span={
                                        'DDD + Telefone do Parceiro / Cliente'
                                    }
                                    placeholderData={
                                        contactSelect?.pixRtParceiro ||
                                        'Não informado'
                                    }
                                    register={register}
                                    type="number"
                                    nome={'pixRtParceiro'}
                                />
                            </>
                        )}
                    </CardInfoData>

                    {Array.from(
                        (contactSelect?.trabalhadores?.length > 0 &&
                            contactSelect?.trabalhadores) ||
                            Array(contactSelect?.quantTrabalhadores).keys(),
                    ).map((value, i) => (
                        <CardInfoData name={`DADOS DO TRABALHADOR ${i + 1}`}>
                            <DataInput
                                span={'Nome'}
                                placeholderData={value?.nome || 'A preencher'}
                                register={register}
                                type="text"
                                nome={`nome${i}`}
                            />
                            <DataInput
                                span={'CPF'}
                                placeholderData={value?.cpf || 'A preencher'}
                                register={register}
                                type="text"
                                nome={`cpf${i}`}
                            />
                            <DateInput
                                span={'Data Nascimento'}
                                placeholderData={
                                    value?.dataNascimento || 'A preencher'
                                }
                                register={register}
                                type="date"
                                nome={`dataNasc${i}`}
                            />
                            <SelectInput
                                register={register}
                                placeholderData={
                                    value?.funcao || trabalhadorFuncao[0]
                                }
                                labelName={'Função'}
                                array={trabalhadorFuncao}
                                nome={`funcao${i}`}
                                // disabled={true}
                            />

                            <SelectInput
                                register={register}
                                placeholderData={
                                    contactSelect?.emitiuMei ||
                                    meiTrabalhador[0]
                                }
                                labelName={'Emitiu MEI?'}
                                array={meiTrabalhador}
                                nome={`emitiuMei${i}`}
                                // disabled={true}
                            />
                        </CardInfoData>
                    ))}

                    <button
                        onClick={() => {
                            setContract(true);
                            setActualMenuSession({
                                controleContatos: false,
                                contratos: true,
                                gerenciamento: false,
                                relatorios: false,
                            });
                        }}
                        className="text-lg bg-white rounded-[8px] px-7 py-3 hover:bg-[var(--primary)] hover:text-white transition-all border-black border-[1rem]"
                    >
                        Gerar contrato
                    </button>
                </div>
            </div>

            {menuReduzido && (
                <div className="flex flex-col h-[700rem] justify-between">
                    <Historico
                        isHoverEffect={false}
                        register={register}
                        contacts={contactSelect}
                    />

                    <Anexos
                        fields={fields}
                        contacts={contactSelect}
                        append={append}
                        remove={remove}
                        register={register}
                    />
                </div>
            )}
        </div>
    );
};

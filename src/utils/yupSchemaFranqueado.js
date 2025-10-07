/** @format */
import * as yup from 'yup';

export const schema = yup.object().shape({
    nome: yup
        .string()
        .required('O campo é necessário!')
        .matches(
            /^[A-Za-z\s]+$/,
            'O campo Nome deve conter apenas letras e espaços!',
        ),

    telefone: yup
        .string()
        .required('O campo é necessário!')
        .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido!'),

    cnpj: yup
        .string()
        .required('O campo é necessário!')
        .matches(
            /^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})-(\d{2})$/,
            'CNPJ inválido! Digite no formato: XX.XXX.XXX/XXXX-XX',
        ),

    estado: yup
        .string()
        .required('o campo é requirido')
        .min(1, 'Selecione pelo menos um estado')
        .notOneOf(['n/a'], 'Selecione um estado'),

    cidade: yup
        .string()
        .required('o campo é requirido')
        .min(1, 'Selecione pelo menos uma cidade')
        .notOneOf(['n/a'], 'Selecione uma cidade'),

    nomeComercialdaFranquia: yup.string().required('O campo é necessário!'),

    razaoSocial: yup.string().required('O campo é necessário!'),

    endereco: yup.string().required('O campo é necessário!'),

    bairro: yup.string().required('O campo é necessário!'),

    dataInicio: yup.string().matches(
        //andré pediu para marcar como dia/mes/ano para enviar um parabéns para franquia q completar um ano
        /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        'Data inválida! Use o formato DD/MM/YYYY.',
    ),

    telefoneComercial: yup //telefone comercial da franquia
        .string()
        .required('O campo é necessário!')
        .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido!'),

    email: yup
        .string()
        .email('Digite um email válido!')
        .required('O campo Email é necessário!'),

    emailAdministrativo: yup
        .string()
        .email('Digite um email válido!')
        .required('O campo Email Administrativo é necessário!'),

    estadoAtuacao: yup
        .string()
        .required('O campo é obrigatório')
        .notOneOf(['n/a'], 'Selecione um estado'),

    cidadeAtuacao: yup
        .array()
        .required('Campo obrigatório')
        .min(1, 'Selecione pelo menos uma cidade'),

    numeroHabitantes: yup
        .number()
        .typeError('O campo deve conter apenas números!')
        .positive('O número de habitantes deve ser positivo!')
        .required('O campo é necessário!'),

    telefoneFranquia: yup // telefone da franquia
        .string()
        .required('O campo é necessário!')
        .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido!'),

    nfDados: yup.string().required('O campo é necessário!'),
});

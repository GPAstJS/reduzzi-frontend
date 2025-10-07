/** @format */
import * as yup from 'yup';

export const schemaCargos = yup.object().shape({
    nome: yup
        .string()
        .required('O campo é necessário!')
        .matches(
            /^[A-Za-z\s]+$/,
            'O campo Nome deve conter apenas letras e espaços!',
        ),

    cpf: yup
        .string()
        .required('O campo é necessário!')
        .matches(
            /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
            'CPF inválido! Digite no formato: xxx.xxx.xxx-xx',
        ),

    razaoSocial: yup.string().required('O campo é necessário!'),

    cargo: yup.string().required('O campo Cargo é necessário!'),

    email: yup
        .string()
        .email('Digite um email válido!')
        .required('O campo Email é necessário!'),

    emailAdministrativo: yup
        .string()
        .email('Digite um email válido!')
        .required('O campo Email é necessário!'),

    telefonePessoal: yup
        .string()
        .required('O campo é necessário!')
        .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido!'),

    telefoneComercial: yup
        .string()
        .required('O campo é necessário!')
        .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido!'),

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
});

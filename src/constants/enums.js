/** @format */

export const EnumStatus = Object.freeze({
    QUENTE: ['QUENTE', '#f00'],
    NOVO: ['NOVO', '#4933FF'],
    FECHADO: ['FECHADO', '#61BA61'],
    MORNO: ['MORNO', '#FFAA37'],
    FRIO: ['FRIO', '#0995D4'],
    CONTATO_FUTURO: ['CONTATO FUTURO', '#18424E'],
    FECHAR_NA_SEMANA: ['FECHAR NA SEMANA', '#61BA61'],
    PARCEIRO_QUENTE: ['PARCEIRO QUENTE', '#f22'],
    PARCEIRO_MORNO: ['PARCEIRO MORNO', '#FFAA37'],
    PARCEIRO_FRIO: ['PARCEIRO FRIO', '#0995D4'],
    NÃO_RESPONDE: ['NÃO RESPONDE', '#FA1843'],
});

export const Classificado = Object.freeze({
    FRANQUEADO: {
        id: true,
        nome: true,
        email: true,
        cpf: true,
        status: true,
    },
    GESTOR: {
        id: true,
        nome: true,
        email: true,
        cpf: true,
        status: true,
    },
    VENDEDOR: {
        id: true,
        nome: true,
        email: true,
        cpf: true,
        status: true,
    },
    FISCAL: {
        id: true,
        nome: true,
        email: true,
        cpf: true,
        status: true,
    },
    FINANCEIRO: {
        id: true,
        nome: true,
        email: true,
        cpf: true,
        status: true,
    },
    SYSTEM_ADMIN: {
        id: true,
        nome: true,
        email: true,
        cpf: true,
        status: true,
    },
    DEFAULT: {
        id: true,
        nome: true,
        email: true,
        cpf: true,
        status: true,
    },
});

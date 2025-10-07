/** @format */
import { GerenciamentoInput } from './components/GerenciamentoInput';

import { Ufs } from './components/Ufs';

export const CargosForm = ({
    errors,
    isSubmitted,
    register,
    getCidades,
    cidades,
    setEmailToAdd,
}) => {
    return (
        <div className="flex flex-col">
            <GerenciamentoInput
                register={register}
                nome={'nome'}
                placeholder={'Nome'}
                label={'Nome:'}
                error={errors.nome}
                isSubmitted={isSubmitted}
            />

            <GerenciamentoInput
                register={register}
                nome={'cpf'}
                label={'CPF'}
                placeholder={'XXX.XXX.XXX-XX'}
                mask={'999.999.999-99'}
                error={errors.cpf}
                isSubmitted={isSubmitted}
            />

            <GerenciamentoInput
                register={register}
                nome="razaoSocial"
                label="Razão Social"
                placeholder={'Razão social:'}
                error={errors.razaoSocial}
                isSubmitted={isSubmitted}
            />

            <GerenciamentoInput
                register={register}
                nome={'email'}
                label={'Email'}
                placeholder={'Email:'}
                error={errors.email}
                isSubmitted={isSubmitted}
            />

            <GerenciamentoInput
                register={register}
                nome={'emailAdministrativo'}
                label={'Email Administrativo'}
                placeholder={'Email Administrativo:'}
                error={errors.emailAdministrativo}
                isSubmitted={isSubmitted}
            />

            <GerenciamentoInput
                register={register}
                nome={'telefonePessoal'}
                label={'Telefone pessoal'}
                placeholder={'(xx) xxxxx-xxxx'}
                error={errors.telefonePessoal}
                isSubmitted={isSubmitted}
                mask={'(99) 99999-9999'}
            />

            <GerenciamentoInput
                register={register}
                nome={'telefoneComercial'}
                label={'Telefone comercial'}
                placeholder={'(xx) xxxxx-xxxx'}
                error={errors.telefoneComercial}
                isSubmitted={isSubmitted}
                mask={'(99) 99999-9999'}
            />
            <Ufs
                getCidades={getCidades}
                cidades={cidades}
                register={register}
                errors={errors}
                setEmailToAdd={setEmailToAdd}
            />
        </div>
    );
};

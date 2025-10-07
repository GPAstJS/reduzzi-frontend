/** @format */
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect, useRef, useContext } from 'react';

import { useForm } from 'react-hook-form';

import { CiSearch } from 'react-icons/ci';

import { yupResolver } from '@hookform/resolvers/yup';

import { CargosForm } from '../Formularios/CargosForm';
import { FranquiaForm } from '../Formularios/FranquiaForm';
import { InviteEmail } from '../Formularios/components/InviteEmail';
import { BotaoConvidar } from '../Formularios/components/BotaoConvidar';

import { AuthContext } from '../../contexts/AuthContext';

import { useGetCity } from '../../hooks/useGetCity';
import { useGetUsers } from '../../hooks/useGetUsers';
import { useInviteEmail } from '../../hooks/useInviteEmail';

import { ufs } from '../../utils/estados';
import { schema } from '../../utils/yupSchemaFranqueado';
import { schemaCargos } from '../../utils/yupSchemaCargos';

export const GerenciamentoFranquias = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCities, setSelectedCities] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const dropdownRef = useRef(null);

    const { cidades, getCidades, setUf } = useGetCity();

    const { cargo, inviteUser, setCargo } = useInviteEmail();

    const { dataUsers, fetchUsers } = useGetUsers();

    const filteredCities = cidades?.cidadeEstadoAtuacao?.filter((cidade) =>
        cidade?.label?.toLowerCase()?.includes(searchTerm?.toLowerCase()),
    );

    const handleCheckboxChange = (cityValue) => {
        setSelectedCities((prevSelected) =>
            prevSelected.includes(cityValue)
                ? prevSelected.filter((value) => value !== cityValue)
                : [...prevSelected, cityValue],
        );
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitted },
    } = useForm({
        defaultValues: {
            cargo: 'franqueado',
        },
        resolver:
            cargo !== 'franqueado'
                ? yupResolver(schemaCargos)
                : yupResolver(schema),
        mode: 'onSubmit',
    });

    const onSubmit = async (data) => inviteUser(data);

    useEffect(() => {
        fetchUsers(currentUser?.franquia?.id);
    }, [currentUser]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col w-full bg-white rounded-[25rem] p-6">
            <h1 className="text-3xl text-[var(--primary)]">
                Gerenciar membros
            </h1>

            <div className="w-full border-[1rem] border-black h-[45rem] flex items-center px-6 mt-6">
                <CiSearch size={24} />

                <input
                    className="border-none w-full text-xl outline-none ml-4"
                    placeholder="Pesquisar por nome ou e-mail"
                    type="text"
                />
            </div>

            <div className="flex flex-col items-end w-full mt-16">
                <div className="flex flex-row w-fit h-[45rem] border-[1rem] border-black  ">
                    <InviteEmail
                        nome="email"
                        register={register}
                        error={errors.email}
                    />

                    <select
                        className="text-lg w-fit border-l-[1rem] text-center px-4"
                        defaultValue={'franqueado'}
                        {...register('cargo', {
                            onChange: (e) => setCargo(e.target.value),
                        })}
                    >
                        <option className="text-lg" value="franqueado">
                            Franqueado
                        </option>

                        <option className="text-lg" value="gestor">
                            Gestor
                        </option>

                        <option className="text-lg" value="vendedor">
                            Vendedor
                        </option>

                        <option className="text-lg" value="fiscal">
                            Fiscal
                        </option>

                        <option className="text-lg" value="financeiro">
                            Financeiro
                        </option>
                    </select>

                    <BotaoConvidar
                        label="Convidar"
                        onClick={() => handleSubmit(onSubmit)()}
                    />
                </div>

                {watch('cargo') === 'franqueado' ? (
                    <FranquiaForm
                        cities={cidades}
                        ufs={ufs}
                        errors={errors}
                        isSubmitted={isSubmitted}
                        dropdownRef={dropdownRef}
                        control={control}
                        selectedCities={selectedCities}
                        isDropdownOpen={isDropdownOpen}
                        searchTerm={searchTerm}
                        filteredCities={filteredCities}
                        toggleDropdown={toggleDropdown}
                        handleCheckboxChange={handleCheckboxChange}
                        setUf={setUf}
                        getCidades={getCidades}
                        setSearchTerm={setSearchTerm}
                        register={register}
                    />
                ) : (
                    <CargosForm
                        errors={errors}
                        isSubmitted={isSubmitted}
                        register={register}
                        getCidades={getCidades}
                        cidades={cidades}
                        // setEmailToAdd={setEmailToAdd}
                    />
                )}
            </div>

            <div className="w-full rounded-[15rem_15rem_0rem_0rem] p-4 items-center justify-center flex flex-col mt-4 border-[1rem] border-black">
                <table className="w-full border-collapse">
                    <thead className="text-start border-b-black border-b-[1rem]">
                        <tr>
                            <th className="text-xl opacity-65 text-start px-8">
                                NOME
                            </th>
                            <th className="text-xl opacity-65 text-start px-8">
                                FUNÇÃO
                            </th>
                            <th className="text-xl opacity-65 text-start px-8">
                                E-MAIL
                            </th>
                            <th className="text-xl opacity-65 text-start px-8">
                                FRANQUIA
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {dataUsers.users?.map((user, index) => (
                            <tr key={index}>
                                <td className="text-sm opacity-65 px-8">
                                    {user?.name}
                                </td>
                                <td className="text-sm opacity-65 px-8">
                                    {user?.occupation}
                                </td>
                                <td className="text-sm opacity-65 px-8">
                                    {user?.email}
                                </td>
                                <td className="text-sm opacity-65 px-8">
                                    {dataUsers?.franquia?.nome}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GerenciamentoFranquias;

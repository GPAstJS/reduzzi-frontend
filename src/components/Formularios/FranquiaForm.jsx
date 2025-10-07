/** @format */
import { Controller } from 'react-hook-form';

import { useState } from 'react';

import { GerenciamentoInput } from './components/GerenciamentoInput';

export const FranquiaForm = ({
    cities,
    ufs,
    errors,
    isSubmitted,
    dropdownRef,
    control,
    isDropdownOpen,
    searchTerm,
    filteredCities,
    toggleDropdown,
    setUf,
    getCidades,
    setSearchTerm,
    register,
}) => {
    const [selectedCities, setSelectedcities] = useState([]);

    return (
        <div>
            <div className="flex flex-col">
                <GerenciamentoInput
                    register={register}
                    nome={'nome'}
                    label={'Nome'}
                    error={errors.nome}
                    placeholder={'Nome:'}
                    isSubmitted={isSubmitted}
                />

                <GerenciamentoInput
                    register={register}
                    nome={'telefone'}
                    label={'Telefone'}
                    placeholder={'(xx) xxxxx-xxxx'}
                    mask={'(99) 99999-9999'}
                    error={errors.telefone}
                    isSubmitted={isSubmitted}
                />

                <GerenciamentoInput
                    register={register}
                    nome="cnpj"
                    label="CNPJ"
                    placeholder="XX.XXX.XXX/XXXX-XX"
                    mask="99.999.999/9999-99"
                    error={errors.cnpj}
                    isSubmitted={isSubmitted}
                />

                {/* selects do nova organização */}
                <div className="w-[100%] flex flex-row items-center justify-between h-[45rem] border-[1rem] border-black gap-2 pl-1">
                    <label className="text-lg border-none">
                        Estado Da Franquia:
                        {errors.estado && (
                            <span className="text-red-500 text-sm">
                                {errors.estado.message}
                            </span>
                        )}
                    </label>

                    <div className="h-[100%] flex justify-center">
                        <select
                            className="text-lg border-none text-center pl-2 w-[225rem]"
                            {...register('estado', {
                                onChange: (e) => {
                                    getCidades(e.target.value, false);
                                },
                            })}
                            defaultValue={'n/a'}
                        >
                            <option disabled value={'n/a'}>
                                Selecione um Estado
                            </option>

                            {ufs.map((uf, i) => (
                                <option
                                    className="text-lg bg-white"
                                    value={uf.value}
                                    key={i}
                                >
                                    {uf.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="w-[100%] flex flex-row items-center justify-between h-[45rem] border-[1rem] border-black gap-2 pl-1">
                    <label className="text-lg">
                        Cidade da Franquia:
                        {errors.cidade && (
                            <span className="text-red-500 text-sm">
                                {errors.cidade.message}
                            </span>
                        )}
                    </label>

                    <div className="h-[100%] flex justify-center">
                        <select
                            className="text-lg border-none text-center pl-2 w-[240rem]"
                            {...register('cidade')}
                            defaultValue={'n/a'}
                        >
                            <option disabled value={'n/a'}>
                                Selecione uma Cidade
                            </option>

                            {cities?.cidadeEstado?.map((city, i) => (
                                <option
                                    className="text-lg bg-white"
                                    value={city.value}
                                    key={i}
                                >
                                    {city.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <GerenciamentoInput
                    register={register}
                    nome={'nomeComercialdaFranquia'}
                    label={'Nome comercial da franquia'}
                    placeholder={'Nome comercial da franquia:'}
                    error={errors.Ncomercial}
                    isSubmitted={isSubmitted}
                />

                <GerenciamentoInput
                    register={register}
                    nome={'razaoSocial'}
                    label={'Razão Social'}
                    placeholder={'Razão social:'}
                    error={errors.Rsocial}
                    isSubmitted={isSubmitted}
                />

                <GerenciamentoInput
                    register={register}
                    nome={'endereco'}
                    label={'Endereço'}
                    placeholder={'Rua/AV/Estrada/Nº'}
                    error={errors.endereco}
                    isSubmitted={isSubmitted}
                />

                <GerenciamentoInput
                    register={register}
                    nome={'bairro'}
                    label={'Bairro'}
                    placeholder={'Bairro:'}
                    error={errors.bairro}
                    isSubmitted={isSubmitted}
                />

                <GerenciamentoInput
                    register={register}
                    nome={'dataInicio'}
                    label={'Data de início da franquia'}
                    placeholder={'dd/mm/aaaa'}
                    error={errors.dataInicio}
                    isSubmitted={isSubmitted}
                    mask={'99/99/9999'}
                />

                <GerenciamentoInput
                    register={register}
                    nome={'telefoneComercial'}
                    label={'Telefone Comercial da Franquia'}
                    placeholder={'(xx) xxxxx-xxxx'}
                    error={errors.telefoneComercial}
                    isSubmitted={isSubmitted}
                    mask={'(99) 99999-9999'}
                />

                <GerenciamentoInput
                    register={register}
                    nome={'emailAdministrativo'}
                    label={'Email administrativo da franquia'}
                    placeholder={'exemplo@reduzzi.com'}
                    error={errors.email}
                    isSubmitted={isSubmitted}
                />

                <div className="w-[100%] flex flex-row items-center justify-between h-[45rem] border-[1rem] border-black gap-2 pl-1">
                    <label className="text-lg border-none">
                        Estado de Atuação:
                        {errors.estadoAtuacao && (
                            <span className="text-red-500 text-sm">
                                {errors.estadoAtuacao.message}
                            </span>
                        )}
                    </label>

                    <div className="h-[100%] flex justify-center">
                        <select
                            className="text-lg border-none text-center pl-2 w-[225rem]"
                            {...register('estadoAtuacao', {
                                onChange: (e) => {
                                    getCidades(e.target.value, true);
                                    setSelectedcities([]);
                                },
                            })}
                            defaultValue={'n/a'}
                        >
                            <option disabled value={'n/a'}>
                                Selecione um Estado
                            </option>

                            {ufs.map((uf, i) => (
                                <option
                                    className="text-lg bg-white"
                                    value={uf.value}
                                    key={i}
                                >
                                    {uf.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="w-full flex flex-row items-center justify-between min-h-[10rem] border-[1rem] border-black gap-2 pl-1">
                    <label className="text-lg flex flex-col">
                        Cidade de atuação:
                        {errors.cidadeAtuacao && (
                            <span className="text-red-500 text-sm">
                                {errors.cidadeAtuacao.message}
                            </span>
                        )}
                    </label>

                    <div
                        className="relative flex h-full items-center"
                        ref={dropdownRef}
                    >
                        <Controller
                            name="cidadeAtuacao"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <>
                                    <button
                                        type="button"
                                        onClick={toggleDropdown}
                                        className="text-lg border-none p-2 w-[200rem] text-center bg-white flex flex-wrap"
                                    >
                                        {selectedCities.length > 0 ? (
                                            <div className="flex flex-wrap gap-2">
                                                {selectedCities.map(
                                                    (city, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                                                        >
                                                            {city}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        ) : (
                                            'Selecione a cidade'
                                        )}
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute z-10 bg-white border border-gray-300 mt-2 w-[240rem] max-h-60 overflow-y-auto">
                                            <input
                                                type="text"
                                                placeholder="Buscar cidade"
                                                className="text-lg border-none p-2 w-[240rem] text-center bg-white"
                                                value={searchTerm}
                                                onChange={(e) =>
                                                    setSearchTerm(
                                                        e.target.value,
                                                    )
                                                }
                                            />

                                            {filteredCities?.map((city, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center p-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id={`city-${i}`}
                                                        value={city.value}
                                                        checked={selectedCities.includes(
                                                            city.value,
                                                        )}
                                                        onChange={() => {
                                                            const updatedCities =
                                                                selectedCities.includes(
                                                                    city.value,
                                                                )
                                                                    ? selectedCities.filter(
                                                                          (v) =>
                                                                              v !==
                                                                              city.value,
                                                                      )
                                                                    : [
                                                                          ...selectedCities,
                                                                          city.value,
                                                                      ];

                                                            setSelectedcities(
                                                                updatedCities,
                                                            );
                                                            field.onChange(
                                                                updatedCities,
                                                            );
                                                        }}
                                                        className="mr-2"
                                                    />
                                                    <label
                                                        htmlFor={`city-${i}`}
                                                        className="text-lg"
                                                    >
                                                        {city.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        />
                    </div>
                </div>
            </div>

            <GerenciamentoInput
                register={register}
                nome={'numeroHabitantes'}
                label={'Número de habitantes'}
                placeholder={'Total área'}
                error={errors.nHabitantes}
                isSubmitted={isSubmitted}
            />

            <GerenciamentoInput
                register={register}
                nome={'telefoneFranquia'}
                label={'Telefone da franquia'}
                error={errors.telefoneFranquia}
                isSubmitted={isSubmitted}
                placeholder={'(xx) xxxxx-xxxx'}
                mask={'(99) 99999-9999'}
            />
            <GerenciamentoInput
                register={register}
                nome={'nfDados'}
                label={'Dados de emissão de NF'}
                error={errors.nfDados}
                placeholder={'CAMPO A CONFIRMAR:'}
                isSubmitted={isSubmitted}
            />
        </div>
    );
};

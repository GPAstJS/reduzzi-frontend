/** @format */
import { GoPlus } from 'react-icons/go';

export const Anexos = ({
    fields,
    append,
    remove,

    register,
    contacts,
}) => {
    return (
        <div className="flex flex-col gap-y-6 overflow-auto h-[300rem] bg-white p-6 rounded-[5rem] w-[400rem]">
            <div className="flex flex-row items-center justify-between">
                <span className="text-base font-bold text-[#053C5C]">
                    Anexos
                </span>

                <div
                    onClick={() =>
                        append({ titulo: '', descricao: '', arquivo: {} })
                    }
                    className="bg-[var(--primary)] rounded-full hover:cursor-pointer"
                >
                    <GoPlus className="fill-[#fff] w-[32rem] h-[32rem]" />
                </div>
            </div>

            {fields.length < 1 ? (
                <p className="text-sm font-bold">Não há Documentos!</p>
            ) : (
                fields?.map((listValue, index) => (
                    <DivList
                        register={register}
                        remove={remove}
                        contacts={contacts}
                        index={index}
                        key={index}
                        value={listValue}
                    />
                ))
            )}
        </div>
    );
};

const DivList = ({ index, remove, value, register, contacts }) => {
    return (
        <>
            <div
                className="flex flex-col items-start gap-y-2 p-4 rounded-[5rem] border-[2rem] h-[175rem]"
                key={index}
            >
                <div className="w-full flex flex-row justify-between">
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm">Título</label>

                            <input
                                className="text-sm text-[var(--primary)] border-gray-600 border-[1rem] px-2"
                                placeholder={contacts?.titulo || 'Título'}
                                {...register(`anexos.${index}.titulo`, {
                                    required: true,
                                })}
                            />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm">Descrição</label>

                            <input
                                className="text-sm text-[var(--primary)] border-gray-600 border-[1rem] px-2"
                                placeholder={value.descricao || 'Digite aqui'}
                                {...register(`anexos.${index}.descricao`, {
                                    required: true,
                                })}
                            />
                        </div>
                    </div>

                    <div onClick={() => remove(index)}>
                        <GoPlus className="w-[32rem] h-[32rem] fill-[#fff] rotate-[45deg] bg-[var(--primary)] rounded-[50%]" />
                    </div>
                </div>

                <input
                    className="text-sm bg-[#e5e7eb] rounded-[10rem_10rem_10rem_10rem] opaciy-75 h-[65rem] mt-4 w-full py-2 px-4"
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    {...register(`anexos.${index}.arquivo`, { required: true })}
                />
            </div>
        </>
    );
};

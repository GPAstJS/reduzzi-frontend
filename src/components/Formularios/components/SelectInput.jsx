/** @format */

export const SelectInput = ({
    register,
    nome,
    labelName,
    array,
    placeholderData,
    disabled,
}) => {
    console.debug('dasdklajsl', placeholderData);

    return (
        <div className="flex flex-col">
            <label htmlFor={nome} className="text-xs opacity-75">
                {labelName}
            </label>

            {disabled ? (
                <label className="text-xs w-auto px-2 border-black border-[1rem] text-black text-center bg-gray-400">
                    {placeholderData}
                </label>
            ) : (
                <select
                    {...register(nome)}
                    className="text-xs w-auto px-2 border-black border-[1rem]"
                    style={{
                        backgroundColor: disabled ? 'gray' : 'white',
                    }}
                    defaultValue={placeholderData || 'default'}
                    id={nome}
                >
                    <option
                        value="default"
                        selected
                        disabled
                        className="text-xs"
                    >
                        Selecione
                    </option>

                    {array.map((e, i) => (
                        <option key={i} className="text-sm" value={e.valor}>
                            {e.label}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

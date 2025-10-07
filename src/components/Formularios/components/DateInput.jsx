/** @format */

import { debounce } from '../../../utils/debounce';

export const DateInput = ({
    span,
    placeholderData,
    inputWidth,
    register,
    nome,
    onClick,
    onChange,
    valueAsNumber,
    disabled,
    onSubmit,
}) => {
    return (
        <div className="flex flex-col w-fit">
            <label className="text-xs opacity-75 w-fit" htmlFor={nome}>
                {span}
            </label>

            {disabled ? (
                <label className="text-xs w-fit px-2 border-black border-[1rem] text-black text-center bg-gray-400">
                    {placeholderData}
                </label>
            ) : (
                <input
                    style={{
                        width: inputWidth,
                    }}
                    placeholder={placeholderData}
                    defaultValue={placeholderData}
                    id={nome}
                    type="date"
                    className="text-xs font-bold border-black flex itens-center border-[1rem] text-[#0b4384] w-fit overflow-hidden pl-2"
                    {...register(nome)}
                    onBlur={(e) => {
                        debounce(onSubmit, 2000)(e.target.value);
                    }}
                />
            )}
        </div>
    );
};

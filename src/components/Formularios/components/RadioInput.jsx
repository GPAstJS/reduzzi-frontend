/** @format */

import { debounce } from '../../../utils/debounce';

export const RadioInput = ({
    radioLabel,
    onClick,
    checkec,
    value,
    register,
    nome,
    onSubmit,
}) => {
    return (
        <div className="flex flex-col text-xs">
            <div className="flex flex-row gap-x-4">
                <div className="flex flex-row gap-x-[2rem] justify-center">
                    <input
                        onClick={(e) => {
                            debounce(onSubmit, 3000)(e.target.value);
                        }}
                        checked={checkec}
                        id={nome}
                        type="radio"
                        value={value}
                        {...register(nome, onClick, onSubmit)}
                        nome={nome}
                    />

                    <label className="text-xs opacity-75">{radioLabel}</label>
                </div>
            </div>
        </div>
    );
};

/** @format */

import { useState } from 'react';

import { EnumStatus } from '../../../constants/enums';

import { omitArguments } from '../../../utils/omitArguments';

export const StatusComponentSelect = ({ register, nome, placeholderData }) => {
    placeholderData = placeholderData.toUpperCase();

    const [status, setStatus] = useState(EnumStatus[placeholderData]);

    const statusArr = Object.keys(EnumStatus);

    // const oldStatus = EnumStatus[placeholderData];

    console.debug('place', placeholderData, 'enum', status);

    return (
        <div className="flex flex-col">
            <select
                {...register(nome, {})}
                className="text-xs w-fit px-2 rounded-[20rem] py-[2px] text-white font-bold"
                style={{
                    backgroundColor: status[1]
                }}
                value={status[0]} 
                id={nome}
                onChange={(e) => {
                    const selectedValue = e.target.value;
                    setStatus(EnumStatus[selectedValue])
                }}
            >
                <option value={status[0]} disabled className="text-sm">
                    {status[0]}
                </option>

                {omitArguments(statusArr, [
                    'QUENTE',
                    'FRIO',
                    'FECHADO',
                    'MORNO',
                    'NOVO',
                ]).map((e, i) => (
                    <option
                        key={i}
                        className="text-sm"
                        value={e}
                    >
                        {e.split('_').join(' ')} 
                    </option>
                ))}
            </select>
        </div>
    );
};

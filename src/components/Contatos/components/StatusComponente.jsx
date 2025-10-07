/** @format */

import { EnumStatus } from '../../../constants/enums';

export const StatusComponent = (status) => {
    const upperStatus = status.toUpperCase();

    return (
        <div
            style={{
                background: EnumStatus[upperStatus]
                    ? EnumStatus[upperStatus][1]
                    : 'white',
            }}
            className="flex items-center justify-between px-[14rem] w-fit h-[22rem] rounded-[15rem]"
        >
            <span className="text-xs text-white font-bold mx-auto text-center ">
                {EnumStatus[upperStatus]
                    ? EnumStatus[upperStatus][0].split('_').join(' ')
                    : 'SEM STATUS'}
            </span>
        </div>
    );
};

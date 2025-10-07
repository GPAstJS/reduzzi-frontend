/** @format */

import { CiUser } from 'react-icons/ci';

// import { GoPencil } from 'react-icons/go';

export const CardInfoData = ({ name, children, menuIsFolded }) => {
    return (
        <div
            className={`${
                menuIsFolded ? 'w-fit' : 'w-full'
            } flex flex-col mb-4 items-center justify-between bg-white p-4 rounded-[5rem]`}
        >
            <div className="flex  flex-row w-full items-center justify-between">
                <div className="flex flex-row items-center">
                    <div className="bg-[var(--primary)] h-[22rem] w-[22rem] rounded-full flex items-center justify-center">
                        <CiUser className="fill-[#fff] w-[12rem] h-[12rem]" />
                    </div>
                    <span className="text-[13rem] font-bold text-[var(--primary)] ml-2 ">
                        {name}
                    </span>
                </div>

                {/*                 <div className="bg-[var(--white)] h-[26rem] w-[26rem] rounded-full flex items-center justify-center">
                    <GoPencil className="fill-black h-[16rem] w-[16rem]" />
                </div> */}
            </div>

            <div className="mt-6 w-full flex flex-wrap gap-[34rem]">
                {children}
            </div>
        </div>
    );
};

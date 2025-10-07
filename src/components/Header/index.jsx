/** @format */

import React, { useContext } from 'react';

import { RiArrowDropRightLine } from 'react-icons/ri';

import { FaRegUserCircle } from 'react-icons/fa';

import { CiBellOn } from 'react-icons/ci';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = ({ description }) => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="h-[68rem]  pt-[10rem] pb-[10rem] px-[12rem] rounded-full flex flex-row items-center justify-between bg-white">
            <div className="flex flex-row items-center justify-center">
                <RiArrowDropRightLine className="fill-[#00CC93] h-[32rem] w-[32rem] mb-[2rem] " />
                <h2 className="text-[20rem] text-[var(--primary)] font-medium">
                    {description}
                </h2>
            </div>

            <div className="flex flex-row items-center gap-2 mr-4">
                <div className="flex flex-col items-end ">
                    <span className="text-sm text-[var(--primary)] font-bold">
                        {currentUser?.name || 'Usuário'}
                    </span>
                    <span className="text-xs opacity-65 italic">
                        {currentUser?.user?.occupation || 'Cargo'}
                    </span>
                </div>

                <div className="flex flex-row items-center justify-between w-[90rem]">
                    {currentUser?.user?.photo ? (
                        <div>
                            <img
                                src={currentUser?.user?.photo}
                                // alt="user"
                                className="h-[40rem] w-[40rem] rounded-full"
                            />
                        </div>
                    ) : (
                        <FaRegUserCircle className="h-[40rem] w-[40rem]" />
                    )}

                    {/* <CiBellOn className="w-[40rem] h-[40rem] bg-gray-200 rounded-full fill-[var(--primary)]" /> */}
                </div>
            </div>
        </div>
    );
};

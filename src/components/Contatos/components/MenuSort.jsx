/** @format */

import { useContext, useEffect } from 'react';

import { ContatosContext } from '../../../contexts/ContatosContext';

export const MenuSort = ({ checked }) => {
    const { populateChecked, setChecked } = useContext(ContatosContext);

    useEffect(() => {
        return populateChecked();
    }, []);

    useEffect(() => {
        console.debug('inside menuSort inside Filter', checked);
        Object.keys(checked).length < 1 && populateChecked();
    })
    return (
        <div>
            <div className="border-[1rem] overflow-auto h-300 border-black bg-white w-[700rem] gap-y-2 px-4 py-2 rounded-[10rem]">
                <div className="grid grid-cols-12 col-start-5 w-max bg-white ">
                    {Object.keys(checked).map((key, index) => (
                        <InputTypes
                            key={index}
                            inputCheckedOptionEnabled={checked[key]}
                            inputCheckedValueToAppend={key}
                            checkedArr={checked}
                            index={index}
                            inputLabel={key}
                            setChecked={() =>
                                setChecked({ ...checked, [key]: !checked[key] })
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const InputTypes = ({ inputCheckedOptionEnabled, inputLabel, setChecked }) => {
    return (
        <div className="flex flex-row gap-1 items-center hover:cursor-auto z-10">
            <input
                readOnly={true}
                type="checkbox"
                checked={inputCheckedOptionEnabled}
                onClick={setChecked}
                className="hover:cursor-pointer"
            />
            <label className="text-sm">{inputLabel}</label>
        </div>
    );
};

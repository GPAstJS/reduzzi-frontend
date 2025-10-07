/** @format */

// /** @format */

// import { useContext, useEffect } from 'react';

// import { ContactsContext } from '../../contexts/useContactsContext';

// const InputTypes = ({ inputCheckedOptionEnabled, inputLabel, setChecked }) => {
//     return (
//         <div className="flex flex-row gap-2 items-center hover:cursor-auto">
//             <input
//                 readOnly={true}
//                 type="checkbox"
//                 checked={inputCheckedOptionEnabled}
//                 onClick={setChecked}
//                 className="hover:cursor-pointer"
//             />
//             <label className="text-sm">{inputLabel}</label>
//         </div>
//     );
// }
// const MenuSort = ({ checked }) => {
//     const { populateChecked, setChecked } = useContext(ContactsContext);

//     useEffect(() => {
//         Object.keys(checked).length < 1 && populateChecked();

//         return () => {};
//     }, []);

//     return (
//         <>
//             <div className="border-[1rem] overflow-auto border-black bg-white w-[500rem] gap-y-2 px-4 py-2 rounded-[10rem]">
//                 <div className="grid grid-cols-8 col-start-5 w-max bg-white">
//                     {Object.keys(checked).map((key, index) => (
//                         <InputTypes
//                             key={index}
//                             inputCheckedOptionEnabled={checked[key]}
//                             inputCheckedValueToAppend={key}
//                             checkedArr={checked}
//                             index={index}
//                             inputLabel={key}
//                             setChecked={() =>
//                                 setChecked({ ...checked, [key]: !checked[key] })
//                             }
//                         />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MenuSort;

//OBS ARQUIVO DUPLICADO


/** @format */
import { useState } from 'react';

import 'chart.js/auto';

import { Pie, Bar, Doughnut } from 'react-chartjs-2';

import { VscSettings } from 'react-icons/vsc';

import { TbArrowBadgeRightFilled } from 'react-icons/tb';

export const Adminstracao = () => {
    const data = [
        {
            labels: ['Abertas', 'Em processo', 'Interesse'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ['#034264', '#00648C', '#0483B5'],
                    hoverOffset: 4,
                    borderWidth: '0',
                    borderColor: ['#034264', '#00648C', '#0483B5'],
                },
            ],
        },
        {
            labels: [
                'Receita Total',
                'Lucro',
                'Contas à receber',
                'Contas à pagar',
            ],
            datasets: [
                {
                    data: [400, 50, 100, 204],
                    backgroundColor: [
                        '#034264',
                        '#00648C',
                        '#0483B5',
                        '#33ADDD',
                    ],
                    hoverOffset: 4,
                    borderWidth: '0',
                    borderColor: ['#034264', '#00648C', '#0483B5'],
                },
            ],
        },
        {
            labels: ['Franq. 1', 'Franq. 2', 'Franq. 3', 'Franq. 4'],
            datasets: [
                {
                    data: [25, 35, 45, 55],
                    backgroundColor: [
                        '#87DAF4',
                        '#33ADDD',
                        '#0483B5',
                        '#00648C',
                    ],
                    borderColor: 'transparent',
                },
            ],
        },
    ];

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const [handle, setHandle] = useState({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
        div5: false,
        div6: false,
        div7: false,
    });

    const [handle2, setHandle2] = useState({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
        div5: false,
        div6: false,
        div7: false,
    });

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row bg-white rounded-[25rem] justify-between w-[49.5%] p-4 h-[450rem]">
                    <div className="flex flex-col border-r-[2rem] w-[45%] px-4">
                        <span className="text-3xl  text-[var(--primary)]">
                            Comercial
                        </span>
                        <div className="flex flex-row">
                            <div className="flex flex-row bg-gray-300 p-2 h-[120rem] w-[150rem] rounded-[25rem]">
                                <VscSettings
                                    className="fill-[var(--primary)] items-center"
                                    size={32}
                                />
                                <div className="flex flex-col  rounded-[25rem]">
                                    <span className="text-xl mt-[5rem] ml-[5rem] opacity-75">
                                        Filtros
                                    </span>
                                    <div className="flex flex-row ml-[5rem] w-[90rem] justify-between">
                                        <input type="checkbox" />
                                        <label className="text-sm" htmlFor="">
                                            Faturados
                                        </label>
                                    </div>
                                    <div className="flex flex-row ml-[5rem] w-[62rem] justify-between">
                                        <input type="checkbox" />
                                        <label className="text-sm" htmlFor="">
                                            Leads
                                        </label>
                                    </div>
                                    <div className="flex flex-row ml-[5rem] w-[90rem] justify-between">
                                        <input type="checkbox" checked />
                                        <label className="text-sm" htmlFor="">
                                            Contratos
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="w-[325rem] h-[325rem] flex items-center justify-center mr-6">
                            <div className="w-[400rem] h-[250rem]">
                                <Bar options={options} data={data[2]} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-[25rem] px-6 py-4 w-[49.5%] flex-row">
                    <div className="w-[50%] flex flex-col">
                        <p className="text-3xl text-[var(--primary)]">
                            Franquias ativas
                        </p>
                        <div className="w-[325rem] h-[325rem] flex flex-row items-center ml-10 mt-6    ">
                            <Pie options={options} data={data[0]} />

                            <div className="flex flex-col gap-y-6 items-start ml-12 justify-start">
                                <div className="flex flex-row justify-between items-center w-[130rem]">
                                    <div className="bg-[#034163] rounded-full w-[45rem] h-[45rem]"></div>
                                    <span className="text-xl opacity-75">
                                        Abertas
                                    </span>
                                </div>
                                <div className="flex flex-row items-center justify-between w-[178rem]">
                                    <div className="bg-[#00648C] rounded-full w-[45rem] h-[45rem]"></div>
                                    <span className="text-xl opacity-75">
                                        Em processo
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between items-center w-[140rem]">
                                    <div className="bg-[#0483B5] rounded-full w-[45rem] h-[45rem]"></div>
                                    <span className="text-xl opacity-75">
                                        Interesse
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col"></div>
                </div>
            </div>

            <div className="w-full bg-white rounded-[25rem] flex flex-row mt-6">
                <div className="w-[50%] py-4 flex  flex-col">
                    <div className=" px-4 border-r-[2rem] h-full flex flex-col">
                        <div className="w-[96%] bg-[#EEF1F6] p-4 flex flex-col gap-y-6 rounded-[25rem]">
                            <div className="w-[95%] border-b-[2rem] border-gray-500">
                                <span className="text-3xl text-[var(--primary)]">
                                    Financeiro
                                </span>
                            </div>

                            <div
                                onClick={() =>
                                    setHandle({
                                        ...!handle,
                                        div1: !handle.div1,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-col"
                            >
                                <div className="flex flex-row hover:cursor-pointer ">
                                    <TbArrowBadgeRightFilled
                                        className="fill-[var(--primary)]"
                                        size={32}
                                    />
                                    <span className="text-xl opacity-65">
                                        Receita total
                                    </span>
                                </div>

                                <div
                                    style={
                                        handle.div1
                                            ? { display: 'flex' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="px-8 "
                                >
                                    <span className="text-lg opacity-65">
                                        Hello World
                                    </span>
                                </div>
                            </div>

                            <div
                                onClick={() =>
                                    setHandle({
                                        ...!handle,
                                        div2: !handle.div2,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-col"
                            >
                                <div className="flex flex-row hover:cursor-pointer ">
                                    <TbArrowBadgeRightFilled
                                        className="fill-[var(--primary)]"
                                        size={32}
                                    />
                                    <span className="text-xl opacity-65">
                                        Receita total
                                    </span>
                                </div>

                                <div
                                    style={
                                        handle.div2
                                            ? { display: 'flex' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="px-8"
                                >
                                    <span className="text-lg opacity-65">
                                        Hello World
                                    </span>
                                </div>
                            </div>
                            <div
                                onClick={() =>
                                    setHandle({
                                        ...!handle,
                                        div3: !handle.div3,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-col"
                            >
                                <div className="flex flex-row hover:cursor-pointer ">
                                    <TbArrowBadgeRightFilled
                                        className="fill-[var(--primary)]"
                                        size={32}
                                    />
                                    <span className="text-xl opacity-65">
                                        Receita total
                                    </span>
                                </div>

                                <div
                                    style={
                                        handle.div3
                                            ? { display: 'flex' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="px-8"
                                >
                                    <span className="text-lg opacity-65">
                                        Hello World
                                    </span>
                                </div>
                            </div>

                            <div
                                onClick={() =>
                                    setHandle({
                                        ...!handle,
                                        div4: !handle.div4,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-col"
                            >
                                <div className="flex flex-row hover:cursor-pointer ">
                                    <TbArrowBadgeRightFilled
                                        className="fill-[var(--primary)]"
                                        size={32}
                                    />
                                    <span className="text-xl opacity-65">
                                        Receita total
                                    </span>
                                </div>

                                <div
                                    style={
                                        handle.div4
                                            ? { display: 'flex' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="px-8"
                                >
                                    <span className="text-lg opacity-65">
                                        Hello World
                                    </span>
                                </div>
                            </div>
                            <div
                                onClick={() =>
                                    setHandle({
                                        ...!handle,
                                        div5: !handle.div5,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-col"
                            >
                                <div className="flex flex-row hover:cursor-pointer ">
                                    <TbArrowBadgeRightFilled
                                        className="fill-[var(--primary)]"
                                        size={32}
                                    />
                                    <span className="text-xl opacity-65">
                                        Receita total
                                    </span>
                                </div>

                                <div
                                    style={
                                        handle.div5
                                            ? { display: 'flex' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="px-8"
                                >
                                    <span className="text-lg opacity-65">
                                        Hello World
                                    </span>
                                </div>
                            </div>
                            <div
                                onClick={() =>
                                    setHandle({
                                        ...!handle,
                                        div6: !handle.div6,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-col"
                            >
                                <div className="flex flex-row hover:cursor-pointer ">
                                    <TbArrowBadgeRightFilled
                                        className="fill-[var(--primary)]"
                                        size={32}
                                    />
                                    <span className="text-xl opacity-65">
                                        Receita total
                                    </span>
                                </div>

                                <div
                                    style={
                                        handle.div6
                                            ? { display: 'flex' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="px-8"
                                >
                                    <span className="text-lg opacity-65">
                                        Hello World
                                    </span>
                                </div>
                            </div>
                            <div
                                onClick={() =>
                                    setHandle({
                                        ...!handle,
                                        div7: !handle.div7,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-col"
                            >
                                <div className="flex flex-row hover:cursor-pointer ">
                                    <TbArrowBadgeRightFilled
                                        className="fill-[var(--primary)]"
                                        size={32}
                                    />
                                    <span className="text-xl opacity-65">
                                        Receita total
                                    </span>
                                </div>

                                <div
                                    style={
                                        handle.div7
                                            ? { display: 'flex' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="px-8"
                                >
                                    <span className="text-lg opacity-65">
                                        Hello World
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[50%] flex flex-col p-6">
                    <p className="text-3xl text-[var(--primary)]">Gráfico</p>
                    <div className="w-[325rem] h-[325rem] flex flex-row items-center ml-12 mt-12">
                        <Pie options={options} data={data[1]} />

                        <div className="flex flex-col gap-y-6 items-start ml-12 justify-start">
                            <div className="flex flex-row justify-between items-center w-[180rem]">
                                <div className="bg-[#034163] rounded-full w-[45rem] h-[45rem]"></div>
                                <span className="text-xl opacity-75">
                                    Receita total
                                </span>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[108rem]">
                                <div className="bg-[#00648C] rounded-full w-[45rem] h-[45rem]"></div>
                                <span className="text-xl opacity-75">
                                    Lucro
                                </span>
                            </div>
                            <div className="flex flex-row justify-between items-center w-[220rem]">
                                <div className="bg-[#0483B5] rounded-full w-[45rem] h-[45rem]"></div>
                                <span className="text-xl opacity-75">
                                    Contas à receber
                                </span>
                            </div>
                            <div className="flex flex-row justify-between items-center w-[205rem]">
                                <div className="bg-[#33ADDD] rounded-full w-[45rem] h-[45rem]"></div>
                                <span className="text-xl opacity-75">
                                    Contas à pagar
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white py-6 rounded-[25rem] flex flex-col mt-6">
                <div className="w-full py-4 flex  flex-col">
                    <div className=" px-4 border-r-[2rem] h-full flex flex-col items-center">
                        <div className="w-full bg-[#EEF1F6] p-4 flex flex-col gap-y-6 rounded-[25rem]">
                            <div className="w-full border-b-[2rem] border-gray-500">
                                <span className="text-3xl text-[var(--primary)]">
                                    Financeiro
                                </span>
                            </div>

                            <div
                                onClick={() =>
                                    setHandle2({
                                        ...!handle2,
                                        div1: !handle2.div1,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-row items-center justify-between"
                            >
                                <div className="flex flex-row hover:cursor-pointer justify-between ">
                                    <div className="flex flex-row">
                                        <TbArrowBadgeRightFilled
                                            className="fill-[var(--primary)]"
                                            size={32}
                                        />
                                        <span className="text-xl opacity-65">
                                            Receita total
                                        </span>
                                    </div>
                                </div>

                                <div
                                    style={
                                        handle2.div1
                                            ? { visibility: 'visible' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="mr-6"
                                >
                                    <span className="text-xl opacity-65">
                                        Something
                                    </span>
                                </div>
                            </div>

                            <div
                                onClick={() =>
                                    setHandle2({
                                        ...!handle2,
                                        div2: !handle2.div2,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-row items-center justify-between"
                            >
                                <div className="flex flex-row hover:cursor-pointer justify-between ">
                                    <div className="flex flex-row">
                                        <TbArrowBadgeRightFilled
                                            className="fill-[var(--primary)]"
                                            size={32}
                                        />
                                        <span className="text-xl opacity-65">
                                            Receita total
                                        </span>
                                    </div>
                                </div>

                                <div
                                    style={
                                        handle2.div2
                                            ? { visibility: 'visible' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="mr-6"
                                >
                                    <span className="text-xl opacity-65">
                                        Something
                                    </span>
                                </div>
                            </div>
                            <div
                                onClick={() =>
                                    setHandle2({
                                        ...!handle2,
                                        div3: !handle2.div3,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-row items-center justify-between"
                            >
                                <div className="flex flex-row hover:cursor-pointer justify-between ">
                                    <div className="flex flex-row">
                                        <TbArrowBadgeRightFilled
                                            className="fill-[var(--primary)]"
                                            size={32}
                                        />
                                        <span className="text-xl opacity-65">
                                            Receita total
                                        </span>
                                    </div>
                                </div>

                                <div
                                    style={
                                        handle2.div3
                                            ? { visibility: 'visible' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="mr-6"
                                >
                                    <span className="text-xl opacity-65">
                                        Something
                                    </span>
                                </div>
                            </div>

                            <div
                                onClick={() =>
                                    setHandle2({
                                        ...!handle2,
                                        div4: !handle2.div4,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-row items-center justify-between"
                            >
                                <div className="flex flex-row hover:cursor-pointer justify-between ">
                                    <div className="flex flex-row">
                                        <TbArrowBadgeRightFilled
                                            className="fill-[var(--primary)]"
                                            size={32}
                                        />
                                        <span className="text-xl opacity-65">
                                            Receita total
                                        </span>
                                    </div>
                                </div>

                                <div
                                    style={
                                        handle2.div4
                                            ? { visibility: 'visible' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="mr-6"
                                >
                                    <span className="text-xl opacity-65">
                                        Something
                                    </span>
                                </div>
                            </div>
                            <div
                                onClick={() =>
                                    setHandle2({
                                        ...!handle2,
                                        div5: !handle2.div5,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-row items-center justify-between"
                            >
                                <div className="flex flex-row hover:cursor-pointer justify-between ">
                                    <div className="flex flex-row">
                                        <TbArrowBadgeRightFilled
                                            className="fill-[var(--primary)]"
                                            size={32}
                                        />
                                        <span className="text-xl opacity-65">
                                            Receita total
                                        </span>
                                    </div>
                                </div>

                                <div
                                    style={
                                        handle2.div5
                                            ? { visibility: 'visible' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="mr-6"
                                >
                                    <span className="text-xl opacity-65">
                                        Something
                                    </span>
                                </div>
                            </div>
                            <div
                                onClick={() =>
                                    setHandle2({
                                        ...!handle2,
                                        div6: !handle2.div6,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-row items-center justify-between"
                            >
                                <div className="flex flex-row hover:cursor-pointer justify-between ">
                                    <div className="flex flex-row">
                                        <TbArrowBadgeRightFilled
                                            className="fill-[var(--primary)]"
                                            size={32}
                                        />
                                        <span className="text-xl opacity-65">
                                            Receita total
                                        </span>
                                    </div>
                                </div>

                                <div
                                    style={
                                        handle2.div6
                                            ? { visibility: 'visible' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="mr-6"
                                >
                                    <span className="text-xl opacity-65">
                                        Something
                                    </span>
                                </div>
                            </div>
                            <div
                                onClick={() =>
                                    setHandle2({
                                        ...!handle2,
                                        div7: !handle2.div7,
                                    })
                                }
                                className="w-[95%] border-b-[2rem] border-gray-500 flex flex-row items-center justify-between"
                            >
                                <div className="flex flex-row hover:cursor-pointer justify-between ">
                                    <div className="flex flex-row">
                                        <TbArrowBadgeRightFilled
                                            className="fill-[var(--primary)]"
                                            size={32}
                                        />
                                        <span className="text-xl opacity-65">
                                            Receita total
                                        </span>
                                    </div>
                                </div>

                                <div
                                    style={
                                        handle2.div7
                                            ? { visibility: 'visible' }
                                            : { visibility: 'collapse' }
                                    }
                                    className="mr-6"
                                >
                                    <span className="text-xl opacity-65">
                                        Something
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <span className="text-3xl text-[var(--primary)] ml-8  ">
                    Gráfico
                </span>

                <div className="flex flex-row items-center">
                    <div className="flex flex-col gap-y-6 items-start ml-12 justify-start">
                        <div className="flex flex-row justify-between items-center w-[180rem]">
                            <div className="bg-[#034163] rounded-full w-[45rem] h-[45rem]"></div>
                            <span className="text-xl opacity-75">
                                Receita total
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[108rem]">
                            <div className="bg-[#00648C] rounded-full w-[45rem] h-[45rem]"></div>
                            <span className="text-xl opacity-75">Lucro</span>
                        </div>
                        <div className="flex flex-row justify-between items-center w-[220rem]">
                            <div className="bg-[#0483B5] rounded-full w-[45rem] h-[45rem]"></div>
                            <span className="text-xl opacity-75">
                                Contas à receber
                            </span>
                        </div>
                        <div className="flex flex-row justify-between items-center w-[205rem]">
                            <div className="bg-[#33ADDD] rounded-full w-[45rem] h-[45rem]"></div>
                            <span className="text-xl opacity-75">
                                Contas à pagar
                            </span>
                        </div>
                    </div>

                    <div className="h-[300rem]' w-[300rem] ml-[400rem]">
                        <Doughnut options={options} data={data[1]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

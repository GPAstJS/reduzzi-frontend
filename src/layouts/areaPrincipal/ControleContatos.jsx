/** @format */

import { ContatosFilter } from '../../components/Contatos/components/ContatosFilter';

import { Contatos } from '../../components/Contatos';

export const ControleContatos = ({
    dataFilter,
    setDataFilter,
    selectedFilter,
    setSelectedFilter,
    checked,
    setChecked,
    scrollRef,
    bgValue,
}) => {
    return (
        <>
            <ContatosFilter
                dataFilter={dataFilter}
                setDataFilter={setDataFilter}
                setSelectedFilter={setSelectedFilter}
                checked={checked}
                setChecked={setChecked}
            />

            <Contatos
                dataFilter={dataFilter}
                setDataFilter={setDataFilter}
                selectedFilter={selectedFilter}
                setContactDataOpened={setContactDataOpened}
                checked={checked}
                bgValue={'white'}
                parentRef={scrollRef}
            />
        </>
    );
};

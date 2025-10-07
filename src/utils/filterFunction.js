/** @format */

import { checkEquality } from './checkEquality';

export function filterFunction(dataToFilter, inputFilters, selectedFilter) {
    let filteredValues;

    const isEmptyFields = Object.keys(inputFilters).every((key) => {
        if (inputFilters[key] === '') return true;

        return false;
    });

    if (selectedFilter?.toLowerCase() !== 'custom') {
        return (filteredValues = dataToFilter.filter((key) => {
            return key.status === selectedFilter.toLowerCase();
        }));
    }

    if (!isEmptyFields && selectedFilter?.toLowerCase() === 'custom') {
        return (filteredValues = checkEquality(
            dataToFilter,
            inputFilters,
            'contato',
        ));
    }

    return dataToFilter;
}

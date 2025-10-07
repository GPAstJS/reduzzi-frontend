/** @format */

import { useMemo } from 'react';
import { debounce } from '../../../utils/debounce';

const DEBOUNCE_DELAY = 2000;

const AutoSave = ({ data, onSubmit }) => {
    const debouncedSave = debounce(onSubmit, DEBOUNCE_DELAY);

    useMemo(() => {
        if (data) {
            debouncedSave(data);
        }
    }, [data, debouncedSave]);

    return null;
};
export default AutoSave;

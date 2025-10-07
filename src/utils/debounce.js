/** @format */
export const debounce = (func, delay) => {
    let timer;

    return (data) => {
        timer = setTimeout(() => func(data), delay);

        return () => clearTimeout(timer);
    };
};

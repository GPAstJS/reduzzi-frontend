/** @format */

export function objectFilter(param) {
    let newObj = {};

    Object.keys(param).filter((i) => {
        if (
            typeof param[i] == 'string' &&
            param[i].length > 0 &&
            param[i] !== 'null'
        )
            newObj = { ...newObj, [i]: param[i] };

        if (
            typeof param[i] == 'number' &&
            param[i].length > 0 &&
            param[i] !== 'null'
        )
            newObj = { ...newObj, [i]: param[i] };
    });

    return newObj;
}

/** @format */

export function dataVisibility(data, obj) {
    let newArr = [];

    if (!obj || Object.keys(obj).length < 1) return data;

    data.forEach((value) => {
        let newObj = {};

        Object.keys(value).forEach((key) => {
            if (obj[key]) {
                newObj[key] = value[key];
            }
        });

        newArr.push({ data: newObj, id: value.id });
    });

    return newArr;
}

/** @format */

export const omitArguments = (arr, argsToOmit) => {
    const newArr = [];

    arr.forEach((element) => {
        const founded = argsToOmit.filter((arg) => element === arg);

        if (founded < 1) newArr.push(element);
    });

    return newArr;
};

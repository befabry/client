/**
 * Takes an array as parameter and return an object with the given func as key and the same value
 * Inspired by Lodash and by : https://www.30secondsofcode.org/js/s/map-keys
 *
 * @param array
 * @param func same arguments as forEach can be passed
 * @returns {{}}
 */
export const mapKeys = (array, func) => {
    let retVal = {};
    array.forEach((currentValue, key, arr) => {
        retVal = Object.assign(retVal, {
            [func(currentValue, key, arr)]: currentValue
        });
    }, retVal);
    return retVal;
};

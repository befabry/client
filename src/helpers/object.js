/**
 * Takes an array or an object as parameter and return an object with the given func as key and the same value
 * Inspired by Lodash and by : https://www.30secondsofcode.org/js/s/map-keys
 *
 * @param array
 * @param func same arguments as forEach can be passed
 * @returns {{}}
 */
const mapKeys = (obj, func) => {
    if(typeof obj !== "object"){
        throw "The parameter obj is not an object or an array";
    }
    
    let result = {};  
    if(Array.isArray(obj)){
        obj.forEach((currentValue, key, arr) => {
            result = { ...result, ...{[func(currentValue, key, arr)]: currentValue}};
        });
    } else {
        Object.keys(obj).forEach(key => {
            result = { ...result, ...{[func(obj[key], key)]: obj[key]}};
        }); 
    }

    return result;
};

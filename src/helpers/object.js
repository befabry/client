/**
 * Takes an array or an object as parameter and return an object with the given func as key and the same value
 * Inspired by Lodash and by : https://www.30secondsofcode.org/js/s/map-keys
 *
 * Examples :
 * let obj = {0:{"id": 5, "test": "test", "test2": "test2"}, 1:{"id": 10, "test": "test", "test2": "test2"}};
 * mapKeys(obj, val => val.id);
 * output : { 5: Object { id: 5, test: "test", test2: "test2" }, 10: { id: 10, test: "test", test2: "test2" }}
 *
 * let arr = [{"id": 5, "test": "test", "test2": "test2"}, {"id": 10, "test": "test", "test2": "test2"}];
 * mapKeys(arr, val => val.id);
 * output : {5: { id: 5, test: "test", test2: "test2" }, 10: { id: 10, test: "test", test2: "test2" }}
 * 
 * @param array
 * @param func
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

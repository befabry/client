/**
 * Return a new object without the values from the omitValues
 *
 * @param {Object} obj The base obj
 * @param {Array} omitValues The keys to omit from the obj
 * @returns {Object} Returns a new instance of the base obj without the keys in omitValues
 */
export default (obj, omitValues) => {
    if (typeof obj !== "object") {
        throw new TypeError("The parameter obj is not an object");
    }

    if(!Array.isArray(omitValues)){
        throw new TypeError("The parameter omitValues is not an array")
    }

    let result = {};
    Object.keys(obj).forEach((key) => {
        if (!omitValues.some((omitKey) => omitKey === key)) {
            result[key] = obj[key];
        }
    });
    return result;
};
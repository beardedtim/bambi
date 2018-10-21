const curry = require("./curry");

/**
 * Sets the given value at the given lens
 *
 * @param {Lens} lens - The lens to the value
 * @param {*} value - The value to set at the lens
 * @param {*} data - The data structure to look in
 * @return {*} - The data with the lens set
 */
const set = (lens, value, data) => lens.set(value, data);

module.exports = curry(set);

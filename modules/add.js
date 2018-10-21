const curry = require("./curry");

/**
 * Adds two values together
 *
 * @example
 *    const add1 = add(1)
 *    add1(1) // 2
 *
 * @param {number | string} a - First value to add
 * @param {number | string} b - Second value to add
 * @return {number | string} - The values added or concatted together
 */
const add = (a, b) => a + b;

module.exports = curry(add);

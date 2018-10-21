const curry = require("./curry");

/**
 * Zips together to arrays given a function
 *
 * @example
 *    list1 = [1, 2, 3]
 *    list2 = [1, 1, 1]
 *    fn = (a, b) => a + b
 *    list3 = zip(fn, list1, list2) // [2, 3, 4]
 */
const zip = (fn, a, b) => a.reduce((acc, c, i) => acc.concat(fn(c, b[i])), []);

module.exports = curry(zip);

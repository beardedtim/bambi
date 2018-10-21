const curry = require("./curry");

/**
 * Defers calling a function with arguments
 *
 * @param {Array<*>} args - The array of arguments to pass
 * @param {Function} fn - The function to call
 * @returns {Function} - () -> fn(...args)
 */
const defer = (args, fn) => () => fn.apply(null, args);

module.exports = curry(defer);

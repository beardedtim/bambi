const curry = require("./curry");

/**
 * Grabs a value from an object
 *
 * @param {string} key - The key to grab
 * @param {Object} obj - The data structure to grab from
 * @return {*}
 */
const prop = (key, obj) => obj[key];

module.exports = curry(prop);

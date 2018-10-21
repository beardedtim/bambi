const curry = require("./curry");

/**
 * A way to get and set values in a data structure
 *
 * @param {function(any) => any} get
 * @param {function(any, a) => a} set
 */
const lens = (get, set) => ({
  get,
  set
});

module.exports = curry(lens);

const curry = require("./curry");
const prop = require("./prop");

/**
 *
 * @param {*} def - Default value
 * @param {(strinng|number)} key - The key to grab
 * @param {Object} obj - The data to grab from
 * @return {*}
 */
const propOr = (def, key, obj) => {
  const val = prop(key, obj);
  return val === undefined ? def : val;
};

module.exports = curry(propOr);

const curry = require("./curry");
const clone = require("./clone");
const assoc = require("./assoc");
const prop = require("./prop");

/**
 * Associates a value at a path
 *
 * @example
 *
 *  assocPath(['profile', 'age'], 30, { profile: { age: 29 } } ) === { profile: { age: 30 } }
 *
 *
 * @param {Array<string|number>} key - The path to associate
 * @param {*} value - The value to associate
 * @param {Object} obj - The structure to associate with
 * @return {Object}
 */
const assocPath = (targetPath, value, data) => {
  // Ensure we are not mutating anything
  const path = targetPath.slice();

  // If we are at the end of our recursion
  if (path.length < 2) {
    return assoc(targetPath.shift(), value, data);
  }

  const key = path.shift();

  // Associate the top key with the recursive result
  return assoc(key, assocPath(path, value, prop(key, data)), data);
};

module.exports = curry(assocPath);

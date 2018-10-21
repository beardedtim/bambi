const curry = require("./curry");
const prop = require("./prop");

/**
 * Walks down a path of an object. Returns
 * undefined early if not found
 *
 * @param {Array<string|number>} keys - The path to the object
 * @param {Object|Array<*>} obj - The data to walk
 * @return {*} - The value or undefined
 */
const path = (keys, obj) => {
  let state = prop(keys[0], obj);

  for (let i = 1; i < keys.length; i++) {
    if (state === undefined) {
      return state;
    }

    state = prop(keys[i], state);
  }

  return state;
};

module.exports = curry(path);

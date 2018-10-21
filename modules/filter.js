const curry = require("./curry");
const prop = require("./prop");

/**
 * Filters a data structure's values by a predicate
 *
 * @param {Function} fn - Predicate function to tell if a value should be included
 * @param {Iterator} iterator - The data structure to walk through
 * @return {(Object|Array<*>)} - The filtered values
 */
const filter = (fn, iterator) => {
  if ("filter" in iterator) {
    return iterator.filter(fn);
  }

  const result = {};

  for (let key in iterator) {
    const value = prop(key, iterator);
    if (fn(value)) {
      result[key] = value;
    }
  }

  return result;
};

module.exports = curry(filter);

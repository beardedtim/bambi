const curry = require("./curry");
const prop = require("./prop");

/**
 * Reduce a data structure's value into a single value
 *
 *
 * @param {Function} fn - Accumlator function
 * @param {*} start - The start of the reduce function
 * @param {Iterator} iterator - The data structure to reduce
 * @return {*} - The reduced value
 */
const reduce = (fn, start, iterator) => {
  if ("reduce" in iterator) {
    return iterator.reduce(fn, start);
  }

  let result = start;

  for (let k in iterator) {
    result = fn(result, prop(k, iterator));
  }

  return result;
};

module.exports = curry(reduce);

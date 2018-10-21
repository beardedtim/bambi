const curry = require("./curry");

/**
 * Transforms an item at the given index
 * by passing it to the trasnform function
 *
 * @param {function(any) => any} transform - Function that transforms the index
 * @param {number} index - The index to transform
 * @param {Array<any>} list - The list that holds the values
 * @returns {Array<any>} - The transformed list
 */
const adjust = (transform, index, list) => [
  ...list.slice(0, index),
  transform(list[index]),
  ...list.slice(index + 1)
];

module.exports = curry(adjust);

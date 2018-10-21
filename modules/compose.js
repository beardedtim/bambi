/**
 * Compose functions into a single function
 *
 * @example:
 *
 *    add = a => a + 1
 *    multiply = b => b * 2
 *    addAndMultiply = compose(multiply, add)
 *    addAndMultiply(1) // 4
 *
 * @param {Array<Function>} fns
 * @return {Function} - value -> *
 */
const compose = (...fns) => start =>
  fns.reduceRight((state, fn) => fn(state), start);

module.exports = compose;

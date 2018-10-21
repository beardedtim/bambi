/**
 * Wraps a function until it gets enough arguments
 *
 * @example
 *
 *  add = (a, b) => a + b
 *
 *  curriedAdd = curry(add)
 *
 *  curriedAdd(1)()(2) === 3
 *
 * @param {Function} fn - The function to call
 * @return {Function}
 */
const curry = fn => (...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...nextArgs) => curry(fn)(...args, ...nextArgs);

module.exports = curry;

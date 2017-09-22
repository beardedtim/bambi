/**
 * Composes functions right to left
 * 
 * @example
 * 
 *    add = a => a + 1
 *    multiply = b => b * 3
 *    AddAndMultiply = pipe(add, multiply)
 *    AddAndMultiply(1) // 6
 * 
 * @param {Array<Function>} fns
 * @return {Function} - value -> * 
 */
const pipe = (...fns) => start => fns.reduce((state, fn) => fn(state), start)
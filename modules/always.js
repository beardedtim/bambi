/**
 * Returns a function that returns the passed value
 * 
 * @example
 *
 *    always(5)() === 5
 *
 * @param {*} v - Value
 * @return {Function} - () -> Value 
 */
const always = v => () => v

export default always

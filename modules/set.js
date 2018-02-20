import curry from './curry'

/**
 * Sets the given value at the given lens
 * 
 * @param {Lens} lens - The lens to the value 
 * @param {*} value - The value to set at the lens 
 * @param {*} data - The data structure to look in
 * @return {*} - The data with the lens set
 */
export const set = (lens, value, data) => lens.set(value, data)

export default curry(set)
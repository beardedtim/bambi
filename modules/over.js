import curry from './curry'

/**
 * A way to set a value on a lens via a function
 * The function gets passed the value at the key along with the 
 * data structure
 * 
 * @param {Lens} lens - The lens to the value to set 
 * @param {function(*, *) => *} fn - A function to immutably create a new value 
 * @param {*} data - The data to look in
 * @return {*} 
 */
export const over = (lens, fn, data) => lens.set(fn(lens.get(data)), data)

export default curry(over)
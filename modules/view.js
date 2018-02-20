import curry from './curry'

/**
 * A way to actually view the value
 * 
 * @param {Lens} lens - The lens to the data 
 * @param {*} data - The data structure to look in
 * @return {*} 
 */
export const view = (lens, data) => lens.get(data)

export default curry(view)
import curry from './curry'

/**
 * A way to get and set values in a data structure
 * 
 * @param {function(any) => any} get 
 * @param {function(any, a) => a} set 
 */
export const lens = (get, set) => ({
  get,
  set
})

export default curry(lens)
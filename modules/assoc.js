import curry from './curry'

/**
 * Associates a value at a key, shallow copies rest
 * 
 * @example
 *  
 *  assoc(1, 'age', { age: 2, name: 'Tim' }) === { age: 1, name: 'Tim' }
 * 
 *
 * @param {string} key - The key to associate
 * @param {*} value - The value to associate
 * @param {Object} obj - The structure to associate with
 * @return {Object}
 */
const assoc = (key, value, obj) => {
  let result = {}

  for (let k in obj) {
    result[k] = obj[k]
  }

  result[key] = value

  return result
}

export default curry(assoc)
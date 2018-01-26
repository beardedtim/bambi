import curry from './curry'

/**
 * Returns a shallow copy of the passed object with
 * the key removed
 * 
 * @example
 * 
 * obj = { name, age }
 * 
 * dissoc('name', obj) === { age }
 * 
 * @param {string} key - The key to remove
 * @param {Object} obj - The object/array to remove
 * @return {Object}
 */
const dissoc = (key, obj) => {
  let result = {}

  for (let k in obj) {
    result[k] = obj[k]
  }

  delete result[key]

  return result
}

export default curry(dissoc)
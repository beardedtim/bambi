import curry from './curry'
import path from './path'

/**
 * Returns the path or the default passed
 * 
 * @param {*} def - The default to return 
 * @param {Array<string|number>} keys - The path to the value
 * @param {*} obj - The data to walk
 * @return {*} - The value at the path or the default
 */
const pathOr = (def, keys, obj) => {
  const val = path(keys, obj)

  return val === undefined ? def : val
}

export default curry(pathOr)
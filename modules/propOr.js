import curry from './curry'
import prop from './prop'

/**
 * 
 * @param {*} def - Default value 
 * @param {(strinng|number)} key - The key to grab 
 * @param {Object} obj - The data to grab from
 * @return {*} 
 */
const propOr = (def, key, obj) => {
  const val = prop(key, obj)
  return val === undefined ? def : val
}

export default curry(propOr)
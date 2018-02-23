import curry from './curry'
import clone from './clone'
import assoc from './assoc'
import prop from './prop'

/**
 * Associates a value at a path
 * 
 * @example
 *
 *  assocPath(['profile', 'age'], 30, { profile: { age: 29 } } ) === { profile: { age: 30 } }
 * 
 *
 * @param {Array<string|number>} key - The path to associate
 * @param {*} value - The value to associate
 * @param {Object} obj - The structure to associate with
 * @return {Object}
 */
export const assocPath = (targetPath, value, data) => {
  // Ensure we are not mutating anything
  const path = targetPath.slice()

  // If we are at the end of our recursion
  if (path.length < 2) {
    return assoc(targetPath.shift(), value, data)
  }

  const key = path.shift()

  // Associate the top key with the recursive result
  return assoc(key, assocPath(path, value, prop(key, data)), data)
}

export default curry(assocPath)
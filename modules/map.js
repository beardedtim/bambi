import fl from 'fantasy-land'
import curry from './curry'
import isFantasy from './isFantasy'
import prop from './prop'

/**
 * Maps over a data structure and applies a function to each member
 * Uses interator.map if present
 * 
 * @example
 * 
 *    iterator = [1, 2, 3]
 *    fn = n => n * 2
 *    map(fn, iterator) // [2, 4, 6]
 *
 * @param {Function} fn - Function to apply to each item 
 * @param {Iterator} iterator - Data structure to walk
 * @return {Iterator} - The mapped data structure
 */
const map = (fn, iterator) => {
  if (isFantasy('map',  iterator)) {
    return iterator[fl.map](fn)
  }

  if ('map' in iterator) {
    return iterator.map(fn)
  }

  const result = {}

  for(let k in iterator) {
    result[k] = fn(prop(k, iterator))
  }

  return result
}

export default curry(map)
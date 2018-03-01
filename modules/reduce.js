import fl from 'fantasy-land'
import curry from './curry'
import isFantasy from './isFantasy'
import prop from './prop'

/**
 * Reduce a data structure's value into a single value
 * 
 * 
 * @param {Function} fn - Accumlator function
 * @param {*} start - The start of the reduce function 
 * @param {Iterator} iterator - The data structure to reduce
 * @return {*} - The reduced value
 */
const reduce = (fn, start, iterator) => {
  if (isFantasy('reduce', iterator)) {
    return iterator[fl.reduce](fn, start)
  }

  if ('reduce' in iterator) {
    return iterator.reduce(fn, start)
  }

  let result = start

  for(let k in iterator) {
    result = fn(result, prop(k, iterator))
  }

  return result
}

export default curry(reduce)
import curry from './curry'
import prop from './prop'

const reduce = (fn, start, iterator) => {
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
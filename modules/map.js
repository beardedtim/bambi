import curry from './curry'

const map = (fn, iterator) => {
  if ('map' in iterator) {
    return iterator.map(fn)
  }

  const result = {}

  for(let k in iterator) {
    result[k] = fn(iterator[k])
  }

  return result
}

export default curry(map)
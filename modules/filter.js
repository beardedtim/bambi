import curry from './curry'
import prop from './prop'

const filter = (fn, iterator) => {
  if ('filter' in iterator) {
    return iterator.filter(fn)
  }

  const result = {}

  for (let key in iterator) {
    const value = prop(key, iterator)
    if (fn(value)) {
      result[key] = value
    }
  }

  return result
}

export default curry(filter)
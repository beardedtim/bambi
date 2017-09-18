import curry from './curry'

const mapArray = (fn, list) => list.map(fn)

const map = (fn, list) => {
  if (Array.isArray(list)) {
    return mapArray(fn, list)
  }

  const result = {}

  for(let k in list) {
    result[k] = fn(list[k])
  }

  return result
}

export default curry(map)
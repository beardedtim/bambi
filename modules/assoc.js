import curry from './curry'

const assoc = curry((value, key, obj) => {
  let result = {}
  for (let k in obj) {
    result[k] = obj[k]
  }
  
  result[key] = value

  return result
})

export default assoc
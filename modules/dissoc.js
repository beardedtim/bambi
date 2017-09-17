import curry from './curry'

const dissoc = curry((key, obj) => {
  let result = {}
  for (let k in obj) {
    result[k] = obj[k]
  }
  
  delete result[key]

  return result
})

export default dissoc
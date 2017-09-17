import curry from './curry'
import prop from './prop'

const propOr = curry((def, key, obj) => {
  const val = prop(key, obj)
  return val === undefined ? def : val
})

export default propOr
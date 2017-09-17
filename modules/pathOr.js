import curry from './curry'
import path from './path'

const pathOr = curry((def, keys, obj) => {
  const val = path(keys, obj)

  return val === undefined ? def : val
})

export default pathOr
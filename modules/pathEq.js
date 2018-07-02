import curry from './curry'
import equals from './equals'
import path from './path'

const pathEq = (p, v, d) => equals(path(p, d), v)

export default curry(pathEq)

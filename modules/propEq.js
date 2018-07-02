import curry from './curry'
import pathEq from './pathEq'

const propEq = (prop, value, data) => pathEq([prop], value, data)

export default curry(propEq)

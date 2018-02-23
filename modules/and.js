import curry from './curry'

const and = (a, b) => !!(a && b)

export default curry(and)
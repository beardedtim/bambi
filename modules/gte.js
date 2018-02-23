import curry from './curry'

const gte = (a, b) => a >= b

export default curry(gte)
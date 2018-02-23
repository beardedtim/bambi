import curry from './curry'

const ifElse = (pred, a, b, data) => pred(data) ? a(data) : b(data)

export default curry(ifElse)
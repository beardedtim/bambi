import curry from './curry'

const prop = curry((key, obj) => obj[key])

export default prop
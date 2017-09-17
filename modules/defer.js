import curry from './curry'

const defer = curry((args, fn) => () => fn.apply(null, args))

export default defer
const curry = fn => (...args) => args.length >= fn.length
  ? fn(...args)
  : (...nextArgs) => curry(fn)(...args, ...nextArgs)

export default curry

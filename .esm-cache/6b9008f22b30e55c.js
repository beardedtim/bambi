const curry = fn => (...args) => args.length >= fn.length
  ? fn(args)
  : (...nextArgs) => curry(fn)(...args, ...nextArgs)

_2b3‍.d(curry);

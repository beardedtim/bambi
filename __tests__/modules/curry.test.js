import curry from '../../modules/curry'

describe('curry', () => {
  test('returns a function', () => {
    expect(typeof curry(() => {} )).toBe('function')
  })

  test('returns functions until given enough arguments', () => {
    const fn = (a,b) => a + b
    const curryFn = curry(fn)

    const curry1 = curryFn(1)
    const curry2 = curry1()
    const curry3 = curry2()
    const curry4 = curry3(1)

    expect(typeof curry2).toBe('function')
    expect(typeof curry3).toBe('function')
    expect(curry4).toBe(2)
  })

  test('returns the value if given enough arugments', () => {
    const fn = curry((a, b) => a + b)
    const result = fn(1, 2)

    expect(result).toBe(3)
  })
})
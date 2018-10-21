const once = require('../../modules/once')

describe('once', () => {
  test('returns the value of calling the given function with the given arguments', () => {
    const value = {}
    const fn = jest.fn().mockReturnValue(value)
    const oner = once(fn)
    const args = {}
    const result = oner(args)

    expect(result).toBe(value)
    expect(fn).toHaveBeenCalledWith(args)
  })

  test('returns the first value returned by the passed in fn', () => {
    const valueA = {}
    const valueB = {}
    const fn = (() => {
      let count = 0
      return () => {
        if (count) {
          return valueB
        }

        count = 1
        return valueA
      }
    })()

    const oner = once(fn)
    const result = oner({})
    const resultb = oner({})

    expect(result).toBe(resultb)
  })

  test('only calls the inner function once', () => {
    const value = {}
    const fn = jest.fn().mockReturnValue(value)

    const oner = once(fn)
    oner()
    oner()

    expect(fn).toHaveBeenCalledTimes(1)
  })
})
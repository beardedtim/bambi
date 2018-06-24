import both from '../../modules/both'

describe('both', () => {
  test('is a curried function', () => {
    expect(typeof both({})()({})()).toBe('function')
  })

  test('returns true if both functions return true', () => {
    const fnA = () => true
    const fnB = () => true
    const fnC = both(fnA, fnB)

    expect(fnC({})).toBe(true)
  })

  test('returns false if either function returns false', () => {
    const fnTrue = () => true
    const fnFalse = () => false
    const firstFalse = both(fnFalse, fnTrue)
    const firstTrue = both(fnTrue, fnFalse)

    expect(firstFalse({})).toBe(firstTrue({}))
  })

  test('passes the supplied argument to both functions', () => {
    const fn = jest
      .fn()
      .mockReturnValue(true)

    const tester = both(fn, fn)
    const value = {}
    expect(tester(value)).toBe(true)
    
    expect(fn).toHaveBeenCalledWith(value)
  })
})
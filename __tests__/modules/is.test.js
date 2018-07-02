import is from '../../modules/is'

describe('is', () => {
  test('is a curried function', () => {
    expect(typeof is()(String)()).toBe('function')
  })

  test('returns true if passed in type has the same constructor as value', () => {
    const a = {}
    const b = {
      constructor: a
    }

    expect(is(a, b)).toBe(true)
  })

  test('returns true if the passed in value is typeof equal to the string', () => {
    const isFunction = is('function')
    const fn = () => {}

    expect(isFunction(fn)).toBe(true)
  })

  test('returns true if the passed in value is of instance of the passed in object', () => {
    class A {}
    class B extends A {}

    const b = new B()
    expect(is(A, b)).toBe(true)
  })
})
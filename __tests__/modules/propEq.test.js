const propEq = require('../../modules/propEq')

describe('propEq', () => {
  test('is a curried function', () => {
    expect(typeof propEq('p')()()(true)()).toBe('function')
  })

  test('returns true if the prop is equal to the value', () => {
    const obj = {
      name: 'Tim'
    }

    const value = 'Tim'
    const prop = 'name'

    expect(propEq(prop, value, obj)).toBe(true)
  })

  test('returns false if the prop is not equal to the value', () => {
    const obj = {
      name: 'John'
    }

    const value = 'Tim'
    const prop = 'name'

    expect(propEq(prop, value, obj)).toBe(false)
  })
})
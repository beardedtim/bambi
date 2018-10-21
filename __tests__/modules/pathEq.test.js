const pathEq = require('../../modules/pathEq')

describe('pathEq', () => {
  test('is a curried function', () => {
    expect(typeof pathEq(['p'])()()(true)()).toBe('function')
  })

  test('returns true if the path of the object is equal to the value', () => {
    const obj = {
      name: 'Tim'
    }

    const value = 'Tim'
    const path = ['name']

    expect(pathEq(path, value, obj)).toBe(true)
  })

  test('returns false if the path of the object is not equal to the value', () => {
    const obj = {
      location: {
        city: 'Cookeville'
      }
    }

    const value = 'Marietta'
    const path = ['location', 'city']

    expect(pathEq(path, value, obj)).toBe(false)
  })
})
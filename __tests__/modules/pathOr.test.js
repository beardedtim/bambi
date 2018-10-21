const pathOr = require('../../modules/pathOr')

describe('pathOr', () => {
  test('returns the value at the given path', () => {
    const p = ['a', 'b', 0]
    const obj = {
      a: {
        b: ['Tim']
      }
    }
    const result = pathOr('', p, obj)

    expect(result).toBe('Tim')
  })

  test('returns default if path is undefined', () => {
    const p = ['a', 'b', 0]
    const obj = {}
    const result = pathOr('blah', p, obj)

    expect(result).toBe('blah')
  })

  test('is curried', () => {
    const p = ['a', 'b', 0]
    const obj = {}
    const result = pathOr('blah')(p)(obj)

    expect(result).toBe('blah')
  })
})
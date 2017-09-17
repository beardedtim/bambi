import path from '../../modules/path'

describe('path', () => {
  test('returns the value at the given path', () => {
    const p = ['a', 'b', 0]
    const obj = {
      a: {
        b: ['Tim']
      }
    }
    const result = path(p, obj)

    expect(result).toBe('Tim')
  })

  test('returns undefined early if path is not real', () => {
    const p = ['a', 'b', 0]
    const obj = {}
    const result = path(p, obj)

    expect(result).toBe(undefined)
  })

  test('is curried', () => {
    const p = ['a', 'b', 0]
    const obj = {}
    const result = path(p)(obj)

    expect(result).toBe(undefined)
  })
})
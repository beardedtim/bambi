import propOr from '../../modules/propOr'

describe('propOr', () => {
  test('returns the value at the given key', () => {
    const key = 'name'
    const obj = { name: 'Tim' }
    const result = propOr('', key, obj)

    expect(result).toBe('Tim')
  })

  test('returns the default if key is undefined', () => {
    const key = 'age'
    const obj = { name: 'Tim' }
    const def = 18
    const result = propOr(def, key, obj)

    expect(result).toBe(def)
  })

  test('is a curried function', () => {
    const key = 'age'
    const obj = { name: 'Tim' }
    const def = 18
    const result = propOr(def)(key)(obj)

    expect(result).toBe(def)
  })
})
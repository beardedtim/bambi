import prop from '../../modules/prop'

describe('prop', () => {
  test('returns the value at the given key', () => {
    const key = 'name'
    const obj = { name: 'Tim' }
    const result = prop(key, obj)

    expect(result).toBe('Tim')
  })

  test('is curried', () => {
    const key = 'name'
    const obj = { name: 'Tim' }
    const result = prop(key)(obj)

    expect(result).toBe('Tim')
  })
})
const assoc = require('../../modules/assoc')

describe('assoc', () => {
  test('associates a value with a key in a new object', () => {
    const key = 'name'
    const value = {}
    const obj = { name: 'John' }
    const result = assoc(key, value, obj)

    expect(result).toEqual({
      name: value
    })
  })

  test('is curried', () => {
    const key = 'name'
    const value = {}
    const obj = { name: 'John' }
    const result = assoc(key)(value)(obj)

    expect(result).toEqual({
      name: value
    })
  })
})
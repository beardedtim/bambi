const dissoc = require('../../modules/dissoc')

describe('assoc', () => {
  test('remoces a value with a key in a new object', () => {
    const key = 'name'
    const obj = { name: 'John' }
    const result = dissoc(key, obj)

    expect(result).toEqual({})
  })

  test('is curried', () => {
    const key = 'name'
    const obj = { name: 'John' }
    const result = dissoc(key)(obj)

    expect(result).toEqual({})
  })
})
const over = require('../../modules/over')
const lensProp = require('../../modules/lensProp')

describe('Over', () => {
  test('It sets the value at the given lens by applying the given function', () => {
    const data = {
      name: 'Tim',
      age: 29
    }

    const nameLens = lensProp('name')

    const setName = name => {
      expect(name).toBe('Tim')
      return 'John'
    }

    const expected = {
      name: 'John',
      age: 29
    }

    const actual = over(nameLens, setName, data)

    expect(actual).toEqual(expected)
  })
})
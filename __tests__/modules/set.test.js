const set = require('../../modules/set')
const lensProp = require('../../modules/lensProp')

describe('Set', () => {
  test('It sets the given value on the given lens in the given data', () => {
    const data = {
      name: 'Tim',
      age: 29
    }

    const nameLens = lensProp('name')

    const expected = {
      name: 'John',
      age: 29
    }

    const actual = set(nameLens, 'John', data)

    expect(actual).toEqual(expected)
  })
})
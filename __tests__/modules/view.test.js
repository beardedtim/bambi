const view = require('../../modules/view')
const lensProp = require('../../modules/lensProp')

describe('View', () => {
  test('It returns the value at the lens', () => {
    const data = {
      name: 'Tim',
      age: 29
    }

    const nameLens = lensProp('name')
    const expected = 'Tim'
    const actual = view(nameLens, data)

    expect(actual).toBe(expected)
  })
})
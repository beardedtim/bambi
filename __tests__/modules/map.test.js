const map = require('../../modules/map')

describe('map', () => {
  test('applies the function to each item in the list', () => {
    const list = [1, 2, 3]
    const fn = a => a * 2
    const result = map(fn, list)

    expect(result).toEqual([2, 4, 6])
  })

  test('applies the function to each item in the obj', () => {
    const list = { a: 1, b: 2, c: 3 }
    const fn = a => a * 2
    const result = map(fn, list)

    expect(result).toEqual({ a: 2, b:4, c: 6 })
  })
})
const adjust = require('../../modules/adjust')

describe('adjust', () => {
  test('is curried', () => {
    expect(typeof adjust(() => {})()([1])).toBe('function')
  })

  test('returns a new array', () => {
    const list = [1]
    const transform = (a) => a
    const index = 0
    const transformed = adjust(transform, index, list)

    expect(transformed).toEqual(list)
    expect(transformed).not.toBe(list)
  })

  test('returns the array with the item at the index adjusted by the transform function', () => {
    const list = [1, 2, 3]
    const index = 1
    const transform = a => a * 2
    const adjusted = adjust(transform, index, list)

    expect(adjusted).toEqual([
      1, 4, 3
    ])
  })
})
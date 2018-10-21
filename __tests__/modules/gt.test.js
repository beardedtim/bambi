const gt = require('../../modules/gt')

describe('gt', () => {
  test('returns true if the first value is greater than the second', () => {
    const a = 2
    const b = 1

    expect(gt(a, b)).toBe(true)
  })

  test('returns false if the first value is less than the second', () => {
    const a = 1
    const b = 2

    expect(gt(a, b)).toBe(false)
  })
})
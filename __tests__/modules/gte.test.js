const gte = require('../../modules/gte')

describe('gte', () => {
  test('returns true if the first value is greater than the second', () => {
    const a = 2
    const b = 1

    expect(gte(a, b)).toBe(true)
  })

  test('returns true if the first value is equal to the second', () => {
    const a = 1

    expect(gte(a, a)).toBe(true)
  })

  test('returns false if the first value is less than the second', () => {
    const a = 1
    const b = 2

    expect(gte(a, b)).toBe(false)
  })
})
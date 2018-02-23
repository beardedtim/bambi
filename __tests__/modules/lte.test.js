import lte from '../../modules/lte'

describe('lte', () => {
  test('returns true if the value is less than the second', () => {
    const a = 1
    const b = 2

    expect(lte(a, b)).toBe(true)
  })

  test('returns true if the value is equal to the second', () => {
    const a = 1

    expect(lte(a, a)).toBe(true)
  })

  test('returns false if the value is greater than the second', () => {
    const a = 1
    const b = 2

    expect(lte(b, a)).toBe(false)
  })
})
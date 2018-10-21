const isNil = require('../../modules/isNil')

describe('isNil', () => {
  test('returns true if the value passed is undefined', () => {
    expect(isNil(undefined)).toBe(true)
  })

  test('returns true if the value passed is null', () => {
    expect(isNil(null)).toBe(true)
  })

  test('returns false if anything other than undefined or null passed', () => {
    const values = [1, 0, '', false, true, {}, []]

    values.forEach(value => {
      expect(isNil(value)).toBe(false)
    })
  })
})
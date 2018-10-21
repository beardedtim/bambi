const equals = require('../../modules/equals')

describe('equals', () => {
  test('returns the strictly equals comparison', () => {
    const valA = 1
    const valB = 1
    const valC = {}
    const valD = {}

    expect(equals(valA, valB)).toBe(true)
    expect(equals(valA, valC)).toBe(false)
    expect(equals(valC, valD)).toBe(false)
  })
})
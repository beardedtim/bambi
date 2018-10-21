const inc = require('../../modules/inc')

describe('inc', () => {
  test('returns the number one higher than the passed in', () => {
    expect(inc(1)).toBe(2)
  })
})
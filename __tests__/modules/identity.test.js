const identity = require('../../modules/identity')

describe('identity', () => {
  test('returns the value passed', () => {
    const val = {}
    const result = identity(val)

    expect(result).toBe(val)
  })
})
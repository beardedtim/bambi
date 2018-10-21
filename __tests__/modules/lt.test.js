const lt = require('../../modules/lt')

describe('lt', () => {
  test('returns true if the first value is less than the second', () => {
    const a = 1
    const b = 2
    
    expect(lt(a, b)).toBe(true)
  })

  test('returns false if the first value is not less than the second', () => {
    const a = 1
    
    expect(lt(a, a)).toBe(false)
  })
})
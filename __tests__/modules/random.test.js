const random = require('../../modules/random')

describe('random', () => {
  test('returns a number between 1 and 100 without arguments', () => {
    expect(random() <= 100 && random() >= 1).toBe(true)
  })

  test('returns a number between the min and max inclusively', () => {
    const value = random(1, 10)
    expect(1 <= value && 10 >= value).toBe(true)
  })
})
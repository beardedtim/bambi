const defer = require('../../modules/defer')

describe('defer', () => {
  test('returns a function that applies the arguments to the given function', () => {
    const fn = (a, b, c) => a + b + c
    const args = [1, 2, 3]
    const result = defer(args, fn)

    expect(result()).toBe(6)
  })

  test('is curried', () => {
    const fn = (a, b, c) => a + b + c
    const args = [1, 2, 3]
    const result = defer(args)(fn)

    expect(result()).toBe(6)
  })
})
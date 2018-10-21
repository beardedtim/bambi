const not = require('../../modules/not')

describe('Not', () => {
  it('returns true if the passed in function returns falsey', () => {
    const fn = () => 0
    const notFn = not(fn)
    expect(notFn()).toBe(true)
  })

  it('returns false if the passed in function returns truthy', () => {
    const fn = () => 1
    const notFn = not(fn)
    expect(notFn()).toBe(false)
  })
})
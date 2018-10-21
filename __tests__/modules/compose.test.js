const compose = require('../../modules/compose')

describe('compose', () => {
  test('composes the given functions and calls them in reverse order', () => {
    let state = 0;
    const fn = () => {
      expect(state++).toEqual(0)
    }

    const fn2 = () => {
      expect(state++).toEqual(1)
    }

    const fn3 = () => {
      expect(state).toEqual(2)
    }

    const composed = compose(fn3, fn2, fn)
    composed()
  })
})
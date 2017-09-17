import always from '../../modules/always'

describe('always', () => {
  test('returns a function that always returns the passed value', () => {
    const always5 = always(5)

    expect(always5()).toBe(5)
  })
})
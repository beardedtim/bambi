import ifElse from '../../modules/ifElse'

describe('ifElse', () => {
  test('returns the result of the second argument if the first returns truthy', () => {
    const a = () => true
    const expected = {}
    const fn = () => expected
    const actual = ifElse(
      a,
      fn,
      () => false
    )({})

    expect(actual).toBe(expected)
  })

  test('returns the result of the third argument if the first returns falsey', () => {
    const a = () => false
    const expected = {}
    const fn = () => expected
    const actual = ifElse(
      a,
      () => false,
      fn
    )({})

    expect(actual).toBe(expected)
  })
})
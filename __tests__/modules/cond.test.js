const cond = require('../../modules/cond')

describe('cond', () => {
  test('returns the value if no conditions met', () => {
    const check = cond([
      [() => false, () => false]
    ])

    const expected = {}
    const actual = check(expected)

    expect(actual).toBe(expected)
  })

  test('returns the condition that returns true and transforms', () => {
    const expected = {}
    const mock = jest.fn().mockReturnValue(expected)
    const check = cond([
      [() => true, mock]
    ])

    const actual = check({})

    expect(actual).toBe(expected)
    expect(mock).toHaveBeenCalled()
  })

  test('returns the first truthy condition\'s transformation', () => {
    const expected = {}
    const mock = jest.fn().mockReturnValue(expected)
    const otherMock = jest.fn()
    const check = cond([
      [() => true, mock],
      [() => true, otherMock]
    ])

    const actual = check({})

    expect(actual).toBe(expected)
    expect(mock).toHaveBeenCalled()
    expect(otherMock).not.toHaveBeenCalled()
  })
})
const reverse = require('../../modules/reverse')

describe('reverse', () => {
  test('returns the passed in array in reverse order', () => {
    const list = [1, 2, 3]
    const reversed = reverse(list)

    expect(reversed[0]).toBe(list[2])
    expect(reversed[2]).toBe(list[0])
  })

  test('returns the passed in string in reverse order', () => {
    const str = 'abc'
    const reversed = reverse(str)

    expect(reversed).toBe('cba')
  })

  test('does not affect the passed in array', () => {
    const list = [1, 2, 3]
    const reversed = reverse(list)

    // Are different
    expect(reversed).not.toBe(list)
    // but can mutate
    expect(list.reverse()).toEqual(reversed)
    // to be equal
    expect(list).toEqual(reversed)
  })
})
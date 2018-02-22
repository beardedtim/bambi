import zip from '../../modules/zip'

describe('Zip', () => {
  test('returns a new array by mixing the two arrays together by the given function', () => {
    const list = [1, 2, 3]
    const list2 = [1, 1, 1]
    const expected = [2, 3, 4]
    const actual = zip((a, b) => a + b, list, list2)

    expect(actual).toEqual(expected)
  })

  test('is a curried function', () => {
    expect(typeof zip()()('fn')()()).toBe('function')
  })
})
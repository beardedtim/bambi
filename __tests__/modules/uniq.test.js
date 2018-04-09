import uniq from '../../modules/uniq'

describe('uniq', () => {
  test('returns an array of unique values', () => {
    const arr = [1, 2, 3, 4, 1]
    const actual = uniq(arr)
    const expected = [1, 2, 3, 4]

    expect(actual).toEqual(expected)
  })

  test('returns a copy of the passed in array', () => {
    const arr = [1, 2, 3]
    const actual = uniq(arr)

    expect(actual).not.toBe(arr)
    expect(actual).toEqual(arr)
  })
})
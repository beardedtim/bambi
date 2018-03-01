import contains from '../../modules/contains'

describe('contains', () => {
  test('returns true if the object contains the key', () => {
    const obj = { name: 'Tim' }
    const key = 'name'
    const expected = true
    const actual = contains(key, obj)

    expect(actual).toBe(expected)
  })

  test('returns true if the array contains the index', () => {
    const arr = [1, 2, 3]
    const i = 1
    const expected = true
    const actual = contains(i, arr)

    expect(actual).toBe(expected)
  })

  test('returns false if the object does not contain the key', () => {
    const obj = {}
    const key = 'name'
    const expected = false
    const actual = contains(key, obj)

    expect(actual).toBe(expected)
  })

  test('returns false if the array does not contain the index', () => {
    const arr = []
    const i = 0
    const expected = false
    const actual = contains(i, arr)

    expect(actual).toBe(expected)
  })
})
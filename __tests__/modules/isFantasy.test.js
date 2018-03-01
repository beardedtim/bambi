import isFantasy from '../../modules/isFantasy'

describe('isFantasy', () => {
  test('returns true if fantasy-land contains the key and the object contains the fantasy-land key', () => {
    const obj = {
      'fantasy-land/map': () => {}
    }

    const key = 'map'
    const expected = true
    const actual = isFantasy(key, obj)

    expect(actual).toBe(expected)
  })

  test('returns false if fantasy-land does not contain the key', () => {
    const obj = {
      'fantasy-land/some-random-key': () => {}
    }

    const key = 'some-random-key'
    const expected = false
    const actual = isFantasy(key, obj)

    expect(actual).toBe(expected)
  })

  test('returns false if the object does not contain the fantasy-land key', () => {
    const obj = [] // contains map but not fantasy-land map
    const key = 'map'
    const expected = false
    const actual = isFantasy(key, obj)

    expect(actual).toBe(expected)
  })
})
import assocPath from '../../modules/assocPath'

describe('Associate Path', () => {
  test('associates a value to a nested path', () => {
    const data = {
      a: {
        b: {
          c: 1
        }
      },
      d: 1
    }

    const path = ['a', 'b', 'c']
    const value = 2
    const expected = {
      a: {
        b: {
          c: 2
        }
      },
      d: 1
    }

    const actual = assocPath(path, value, data)

    expect(actual).toEqual(expected)
  })
})

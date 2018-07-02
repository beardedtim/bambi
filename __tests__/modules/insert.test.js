import insert from '../../modules/insert'

describe('insert', () => {
  test('inserts the item at the index given', () => {
    const list = [1, 2, 3]
    const index = 1
    const value = {}
    const inserted = insert(value, index, list)

    expect(inserted).toEqual([
      1, value, 2, 3
    ])
  })

  test('returns a array of one item if given an empty array', () => {
    const list = []
    const item = 1
    const index = 1
    const inserted = insert(item, index, list)

    expect(inserted).toEqual([1])
  })

  test('adds the item to the array if index is out of bounds', () => {
    const list = [1]
    const item = 2
    const index = 10000
    const inserted = insert(item, index, list)

    expect(inserted).toEqual([
      1, 2
    ])
  })

  test('is a curried function', () => {
    expect(typeof insert(1)()(2)()).toBe('function')
  })
})
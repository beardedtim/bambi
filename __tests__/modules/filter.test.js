const filter = require('../../modules/filter')

describe('filter', () => {
  test('calls the iterator filter if present', () => {
    const iterator = {
      filter: jest.fn()
    }

    const fn = () => {}
    filter(fn, iterator)

    expect(iterator.filter).toHaveBeenCalled()
  })

  test('imitates the array.filter on objects', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 4
    }

    const fn = n => n % 2 === 0
    const result = filter(fn, obj)

    expect(result).toEqual({
      b: 2, c: 4
    })
  })
})
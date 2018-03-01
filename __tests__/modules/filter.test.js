import fl from 'fantasy-land'
import filter from '../../modules/filter'

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

  test('calls the fantasy-land key if iterable contains it', () => {
    const m = jest.fn()
    const fn = jest.fn()

    const it = {
      [fl.filter]: m
    }

    filter(fn, it)

    expect(m).toHaveBeenCalledWith(fn)
  })
})
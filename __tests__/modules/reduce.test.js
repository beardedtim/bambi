import fl from 'fantasy-land'
import reduce from '../../modules/reduce'

describe('identity', () => {
  test('calls reduce method if located', () => {
    const it = {
      reduce: jest.fn()
    }

    const fn = () => {}
    const start = {}

    reduce(fn, start, it)

    expect(it.reduce).toHaveBeenCalled()
  })

  test('mirrors array reduce with objects', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    }

    const fn = (acc, curr) => [...acc, curr * 2]
    const start = []
    const result = reduce(fn, start, obj)

    expect(result).toEqual([2, 4, 6])
  })

  test('calls the fantasy-land key if iterable contains it', () => {
    const m = jest.fn()
    const fn = jest.fn()

    const it = {
      [fl.reduce]: m
    }

    reduce(fn, 1, it)

    expect(m).toHaveBeenCalledWith(fn, 1)
  })
})
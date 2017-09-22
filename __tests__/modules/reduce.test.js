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
})
import fl from 'fantasy-land'
import map from '../../modules/map'

describe('map', () => {
  test('applies the function to each item in the list', () => {
    const list = [1, 2, 3]
    const fn = a => a * 2
    const result = map(fn, list)

    expect(result).toEqual([2, 4, 6])
  })

  test('applies the function to each item in the obj', () => {
    const list = { a: 1, b: 2, c: 3 }
    const fn = a => a * 2
    const result = map(fn, list)

    expect(result).toEqual({ a: 2, b:4, c: 6 })
  })

  test('calls the fantasy-land key if iterable contains it', () => {
    const m = jest.fn()
    const fn = jest.fn()

    const it = {
      [fl.map]: m
    }

    map(fn, it)

    expect(m).toHaveBeenCalledWith(fn)
  })
})
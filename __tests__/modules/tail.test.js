import tail from '../../modules/tail'

describe('tail', () => {
  test('returns the whole list, except for the head', () => {
    const list = [1, 2, 3]
    const last = tail(list)

    expect(last).toEqual([2, 3])
  })

  test('returns an empty array if one or 0 items in the list', () => {
    const list = []
    const listb = [1]
    const tail1 = tail(list)
    const tail2 = tail(listb)

    expect(tail1).toEqual([])
    expect(tail2).toEqual(tail1)
  })

  test('returns an empty array if called with nothing', () => {
    expect(tail()).toEqual([])
  })
})
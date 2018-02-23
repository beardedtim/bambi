import and from '../../modules/and'

describe('and', () => {
  test('returns true if both values are truthy', () => {
    const a = '1'
    const b = 1

    expect(and(a, b)).toBe(true)
  })
})
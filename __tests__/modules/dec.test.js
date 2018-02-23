import dec from '../../modules/dec'

describe('dec', () => {
  test('returns the number one less than the passed in', () => {
    expect(dec(1)).toBe(0)
  })
})
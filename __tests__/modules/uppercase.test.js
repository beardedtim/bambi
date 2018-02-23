import uppercase from '../../modules/uppercase'

describe('uppercase', () => {
  test('returns the given string but uppercased', () => {
    const str = 'abc'

    expect(uppercase(str)).toBe(str.toUpperCase())
  })
})
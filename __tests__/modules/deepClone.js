import deepClone from '../../modules/deepClone'

describe('deepClone', () => {
  test('retuns a deeply cloned object', () => {
    const c = {}
    const b = { c }
    const a = { b }
    const nested = { a }

    const cloned = deepClone(nested)

    // We are checking equality the whole chain down
    expect(nested !== cloned)
    expect(nested.a !== cloned.a)
    expect(nested.a.b !== cloned.a.b)
    expect(nested.a.b.c !== cloned.a.b.c)
  })

  test('returns a deeply cloned array', () => {
    const a = []
    const b = [a]
    const c = [b]

    const cloned = deepClone(c)
    expect(cloned !== c)
    expect(cloned[0] !== c[0])
    expect(cloned[0][0] !== c[0][0])
  })
})

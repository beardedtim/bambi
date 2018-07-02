import head from '../../modules/head'

describe('head', () => {
  test('returns the first item in a list', () => {
    const value = {}
    const list = [value]
    const first = head(list)

    expect(first).toBe(value)
  })

  test('returns undefined if nothing is inside the list', () => {
    const list = []
    const first = head(list)

    expect(first).not.toBeDefined()
  })

  test('returns undefined if not given anything', () => {
    expect(head()).not.toBeDefined()
  })
})
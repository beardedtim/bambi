import defaultTo from '../../modules/defaultTo'

describe('defaultTo', () => {
  test('returns the value given if not equal to undefined or null', () => {
    const a = {}
    const b = 1
    const c = false
    const d = true
    const e = []
    const f = ''

    const validTypes = [a, b, c, d, e, f]

    expect(validTypes.map(defaultTo('never going to happen')).every(v => v !== 'never going to happen')).toBe(true)
  })

  test('returns the default value if the given value is undefined or null', () => {
    const a = null
    const b = undefined
    const defaulted = defaultTo('tim')
  
    expect(defaulted(a)).toBe('tim')
    expect(defaulted(b)).toBe('tim')
  })
})
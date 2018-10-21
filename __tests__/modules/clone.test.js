const clone = require('../../modules/clone')

describe('Clone', () => {
  test('returns a shallow copy of the passed in array', () => {
    const arr = [1, 2, 3]
    const cloned = clone(arr)

    expect(arr !== cloned)
    arr.forEach((n, i) => expect(n !== cloned[i]))
  })

  test('returns a shallow copy of the passed in object', () => {
    const obj = { name: 'Tim' }
    const cloned = clone(obj)

    expect(obj !== cloned)
    Object.keys(obj).forEach((k) => expect(obj[k] !== cloned[k]))
  })
})
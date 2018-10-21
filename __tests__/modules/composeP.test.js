const composeP = require('../../modules/composeP')

describe('composeP', () => {
  test('returns a Promise', () => {
    const one = () => 1
    const composed = composeP(one)

    expect(typeof composed(1).then).toBe('function')
  })

  test('returns a promise of the value transformed', () => {
    const apiCall = Promise.resolve(0)
    const add1 = value => value + 1
    const add2 = value => value + 2
    const add3 = value => value + 3
    const composed = composeP(add3, add2, add1)

    return composed(apiCall).then(value => expect(value).toBe(6))
  })

  test('calls functions in reverse order than given', () => {
    const apiCall = Promise.resolve(0)
    let called = 0
    const add1 = () => expect(called++).toBe(0)
    const add2 = () => expect(called++).toBe(1)
    const add3 = () => expect(called).toBe(2)

    const composed = composeP(add3, add2, add1)

    return composed(apiCall)
  })
})

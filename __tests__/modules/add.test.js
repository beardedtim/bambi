const add = require('../../modules/add')

describe('add', () => {
  test('adds two numbers together', () => {
    expect(add(1, 2)).toBe(3)
  })
})
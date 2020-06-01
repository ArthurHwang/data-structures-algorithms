const recursiveRange = require('./index')

describe('recursiveRange', () => {
  test('it should be a function', () => {
    expect(typeof recursiveRange).toEqual('function')
  })
  test('it should return the correct value', () => {
    expect(recursiveRange(10)).toEqual(55)
  })
})

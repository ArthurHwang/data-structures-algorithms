const productOfArray = require('./index')

describe('productOfArray', () => {
  test('it should be a function', () => {
    expect(typeof productOfArray).toEqual('function')
  })
  test('it should return the correct value', () => {
    expect(productOfArray([1, 2, 3, 10])).toEqual(60)
  })
})

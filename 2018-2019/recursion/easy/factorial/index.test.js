const factorial = require('./index')

describe('factorial', () => {
  test('it should be a function', () => {
    expect(typeof factorial).toEqual('function')
  })
  test('it should return the correct value', () => {
    expect(factorial(5)).toEqual(120)
  })
})

const fib = require('./index')

describe('fib', () => {
  test('it should be a function', () => {
    expect(typeof fib).toEqual('function')
  })
  test('it should return the correct value', () => {
    expect(fib(35)).toEqual(9227465)
  })
})

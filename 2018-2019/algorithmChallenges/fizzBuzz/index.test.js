const {fizzBuzz} = require('./index')

describe('fizzBuzz', () => {
  test('it should be a function', () => {
    expect(typeof fizzBuzz).toBe('function')
  })
  test('it should return Fizz if num is divisible by 3', () => {
    expect(fizzBuzz(4)).toBe()
  })
})

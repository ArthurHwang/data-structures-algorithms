const { isPalindrome, isPalindrome2 } = require('./index')

describe('isPalindrome', () => {
  test('it should be a function', () => {
    expect(typeof isPalindrome).toEqual('function')
  })
  test('it should return the correct index that matches target', () => {
    expect(isPalindrome().toEqual([2, 4])
  })
  test('it should return undefined if no array is passed', () => {
    expect(isPalindrome()).toEqual(undefined)
  })
  test('it should return undefined if passed argument is not of Array type', () => {
    expect(isPalindrome('hello', 20)).toEqual(undefined)
  })
})

describe('isPalindrome2', () => {
  test('it should be a function', () => {
    expect(typeof isPalindrome2).toEqual('function')
  })
  test('it should return the correct index that matches target', () => {
    expect(isPalindrome2([2, 3, 4, 5, 6, 4], 10)).toEqual([2, 4])
  })
  test('it should return undefined if no array is passed', () => {
    expect(isPalindrome2()).toEqual(undefined)
  })
  test('it should return undefined if passed argument is not of Array type', () => {
    expect(isPalindrome2('hello', 20)).toEqual(undefined)
  })
})

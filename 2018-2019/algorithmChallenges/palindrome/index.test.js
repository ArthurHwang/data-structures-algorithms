const { isPalindrome, _isPalindrome, __isPalindrome } = require('./index')

describe('isPalindrome', () => {
  test('it should be a function', () => {
    expect(typeof isPalindrome).toBe('function')
  })
  test('it should return true if input is palindrome', () => {
    expect(isPalindrome('otto')).toBe(true)
  })
  test('it should return false if input is not palindrome', () => {
    expect(isPalindrome('arthur')).toBe(false)
  })
})

describe('_isPalindrome', () => {
  test('it should be a function', () => {
    expect(typeof _isPalindrome).toBe('function')
  })
  test('it should return true if input is palindrome', () => {
    expect(_isPalindrome('otto')).toBe(true)
  })
  test('it should return false if input is not palindrome', () => {
    expect(_isPalindrome('arthur')).toBe(false)
  })
})

describe('__isPalindrome', () => {
  test('it should be a function', () => {
    expect(typeof __isPalindrome).toBe('function')
  })
  test('it should return true if input is palindrome', () => {
    expect(__isPalindrome('otto')).toBe(true)
  })
  test('it should return false if input is not palindrome', () => {
    expect(__isPalindrome('arthur')).toBe(false)
  })
  test('it should strip out all non alpha characters', () => {
    expect(__isPalindrome('arthur234234234234#$%#$%#$%#$%#$%')).toBe(false)
  })
})

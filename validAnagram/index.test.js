validAnagram = require('./validAnagram')

describe('validAnagram', () => {
  test('it should be a function', () => {
    expect(typeof validAnagram).toEqual('function')
  })
  test('it should return false if both strings are not equal length', () => {
    expect(validAnagram('h', 'hi')).toEqual(false)
    expect(validAnagram('hiiiii', 'hi')).toEqual(false)
  })
  test('it should return false if strings are not anagrams', () => {
    expect(validAnagram('hi', 'zi')).toEqual(false)
    expect(validAnagram('pop', 'dop')).toEqual(false)
  })
  test('it should return true if strings are anagrams', () => {
    expect(validAnagram('hello', 'oellh')).toEqual(true)
    expect(validAnagram('confino', 'inofnoc')).toEqual(true)
  })
})

const anagram = require('./')

describe('anagram', () => {
  test('it should be a function', () => {
    expect(typeof anagram).toBe('function')
  })
  test('it should return true if words are anagrams', () => {
    expect(anagram('wow', 'oww')).toBe(true)
  })
  test('it should return false if words are not anagram', () => {
    expect(anagram('wow', 'wod')).toBe(false)
  })
})

const findLongestSubstring = require('./index')

describe('findLongestSubstring', () => {
  test('it should be a function', () => {
    expect(typeof findLongestSubstring).toEqual('function')
  })
  test('it should return null if no string is passsed', () => {
    expect(findLongestSubstring()).toEqual(null)
  })
  test('it should return the correct length of the longest unique substring', () => {
    expect(findLongestSubstring('rithmschool')).toEqual(7)
  })
})

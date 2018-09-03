const isSubsequence = require('./index')

describe('isSubsequence', () => {
  test('it should be a function', () => {
    expect(typeof isSubsequence).toEqual('function')
  })
  test('it should return undefined if either string has no length', () => {
    expect(isSubsequence('', 'hi')).toEqual(undefined)
  })
  test('it should return false if no subsequence is found', () => {
    expect(isSubsequence('abc', 'acb')).toEqual(false)
    expect(isSubsequence('what', 'tombradley')).toEqual(false)
  })
  test('it should return true if a subsequence is found', () => {
    expect(isSubsequence('hello', 'hello world')).toEqual(true)
    expect(isSubsequence('cat', 'socatoa')).toEqual(true)
  })
})

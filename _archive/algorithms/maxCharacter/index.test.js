const maxCharacter = require('./index')

describe('maxCharacter', () => {
  test('it should be a function', () => {
    expect(typeof maxCharacter).toBe('function')
  })
  test('it should return the character that is seen most in the string', () => {
    expect(maxCharacter('fubareddd')).toBe('d')
  })
})

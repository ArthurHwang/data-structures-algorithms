const { vowels, _vowels } = require('./index')

describe('vowels', () => {
  test('it should be a function', () => {
    expect(typeof vowels).toBe('function')
  })
  test('it should return null if no string is passed', () => {
    expect(vowels()).toBe(null)
  })
  test('it should return undefined if no argument type is not string', () => {
    expect(vowels(234)).toBe(undefined)
  })
  test('it should return the total amount of vowels in string', () => {
    expect(vowels('hello there')).toBe(4)
  })
  test('it should return 0 if no vowels are present', () => {
    expect(vowels('nyplmzq')).toBe(0)
  })
})

describe('_vowels', () => {
  test('it should be a function', () => {
    expect(typeof _vowels).toBe('function')
  })
  test('it should return null if no string is passed', () => {
    expect(_vowels()).toBe(null)
  })
  test('it should return undefined if no argument type is not string', () => {
    expect(_vowels(234)).toBe(undefined)
  })
  test('it should return the total amount of _vowels in string', () => {
    expect(_vowels('hello there')).toBe(4)
  })
  test('it should return 0 if no _vowels are present', () => {
    expect(_vowels('nyplmzq')).toBe(0)
  })
})

const { reverseString, _reverseString, __reverseString } = require('./index')

describe('reverseString', () => {
  test('it should be a function', () => {
    expect(typeof reverseString).toBe('function')
  })
  test('it should return undefined if no argument is passed', () => {
    expect(reverseString()).toBe(undefined)
  })
  test('it should return undefined if argument is not a string', () => {
    expect(reverseString(1232)).toBe(undefined)
  })
  test('it should output a reversed string', () => {
    const string = 'hello world'
    expect(reverseString(string)).toEqual('dlrow olleh')
  })
})

describe('_reverseString', () => {
  test('it should be a function', () => {
    expect(typeof _reverseString).toBe('function')
  })
  test('it should return undefined if no argument is passed', () => {
    expect(_reverseString()).toBe(undefined)
  })
  test('it should return undefined if argument is not a string', () => {
    expect(_reverseString(1232)).toBe(undefined)
  })
  test('it should output a reversed string', () => {
    const string = 'hello world'
    expect(_reverseString(string)).toEqual('dlrow olleh')
  })
})

describe('__reverseString', () => {
  test('it should be a function', () => {
    expect(typeof __reverseString).toBe('function')
  })
  test('it should return undefined if no argument is passed', () => {
    expect(__reverseString()).toBe(undefined)
  })
  test('it should return undefined if argument is not a string', () => {
    expect(__reverseString(1232)).toBe(undefined)
  })
  test('it should output a reversed string', () => {
    const string = 'hello world'
    expect(__reverseString(string)).toEqual('dlrow olleh')
  })
})

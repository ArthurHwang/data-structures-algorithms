const { reverseInt, _reverseInt } = require('./index')

describe('reverseInt', () => {
  test('it should be a function', () => {
    expect(typeof reverseInt).toBe('function')
  })
  test('it should return a reversed number', () => {
    expect(reverseInt(123456)).toBe(654321)
  })
})

describe('_reverseInt', () => {
  test('it should be a function', () => {
    expect(typeof _reverseInt).toBe('function')
  })
  test('it should return a reversed number', () => {
    expect(_reverseInt(123456)).toBe(654321)
  })
})

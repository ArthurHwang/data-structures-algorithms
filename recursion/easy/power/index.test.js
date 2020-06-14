const power = require('./index')

describe('power', () => {
  test('it should be a function', () => {
    expect(typeof power).toEqual('function')
  })
  test('it should return the corrrect value', () => {
    expect(power(2, 4)).toEqual(16)
    expect(power(2, 20)).toEqual(1048576)
  })
})

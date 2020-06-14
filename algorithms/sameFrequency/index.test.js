const sameFrequency = require('./index')

describe('sameFrequency', () => {
  test('it should be a function', () => {
    expect(typeof sameFrequency).toEqual('function')
  })
  test('it should return false if frequency of numbers is not the same', () => {
    expect(sameFrequency(22, 222)).toEqual(false)
    expect(sameFrequency(34, 14)).toEqual(false)
    expect(sameFrequency(18018, 81800)).toEqual(false)
  })
  test('it should return true if frequency of numbers is the same', () => {
    expect(sameFrequency(222, 222)).toEqual(true)
    expect(sameFrequency(180, 108)).toEqual(true)
    expect(sameFrequency(8675309, 7568309)).toEqual(true)
  })
})

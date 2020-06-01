const { maxSubarraySumON2, maxSubarraySumON } = require('./index')

describe('maxSubarraySumON2', () => {
  test('it should be a function', () => {
    expect(typeof maxSubarraySumON2).toEqual('function')
  })
  test('it should return null if num > items in array', () => {
    expect(maxSubarraySumON2([1, 2, 3], 5)).toEqual(null)
  })
  test('it should return the correct maximum sum of n consecutive elements in array', () => {
    expect(maxSubarraySumON2([1, 2, 3], 2)).toEqual(5)
    expect(maxSubarraySumON2([1, 2, 3, 55, 2, 30, 50, 10], 3)).toEqual(90)
  })
})

describe('maxSubarraySumON', () => {
  test('it should be a function', () => {
    expect(typeof maxSubarraySumON).toEqual('function')
  })
  test('it should return null if num > items in array', () => {
    expect(maxSubarraySumON([1, 2, 3], 5)).toEqual(null)
  })
  test('it should return the correct maximum sum of n consecutive elements in array', () => {
    expect(maxSubarraySumON([1, 2, 3], 2)).toEqual(5)
    expect(maxSubarraySumON([1, 2, 3, 55, 2, 30, 50, 10], 3)).toEqual(90)
  })
})

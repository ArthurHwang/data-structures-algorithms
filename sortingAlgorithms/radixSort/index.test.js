const { radixSort, getDigit, digitCount, mostDigits } = require('./index')

describe('getDigit', () => {
  test('it should be a function', () => {
    expect(typeof getDigit).toEqual('function')
  })
  test('it should return the correct digit', () => {
    expect(getDigit(123123, 0)).toEqual(3)
  })
})

describe('digitCount', () => {
  test('it should be a function', () => {
    expect(typeof digitCount).toEqual('function')
  })
  test('it should return correct count of digits present', () => {
    expect(digitCount(123123)).toEqual(6)
  })
})

describe('mostDigits', () => {
  test('it should be a function', () => {
    expect(typeof mostDigits).toEqual('function')
  })
  test('it should return the correct maximum digits seen', () => {
    expect(mostDigits([12, 312, 432, 6556456, 345, 2, 234])).toEqual(7)
  })
})

describe('radixSort', () => {
  test('it should be a function', () => {
    expect(typeof radixSort).toEqual('function')
  })
  test('it should return a sorted array', () => {
    expect(radixSort([123123, 50, -50, 1, 2, 3, -59, 990])).toEqual([1, 2, 3, 50, -50, -59, 990, 123123])
  })
})

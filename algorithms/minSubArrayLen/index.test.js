const { minSubArrayLenON2, minSubArrayLenON } = require('./index')

describe('minSubArrayLenON2', () => {
  test('it should be a function', () => {
    expect(typeof minSubArrayLenON2).toEqual('function')
  })
  test('it should return 0 if no match is found', () => {
    expect(minSubArrayLenON2([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toEqual(0)
  })
  test('it should return the minimal length of a contiguous subarray that is equal to or greater than the target number', () => {
    expect(minSubArrayLenON2([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toEqual(5)
  })
})

describe('minSubArrayLenON', () => {
  test('it should be a function', () => {
    expect(typeof minSubArrayLenON).toEqual('function')
  })
  test('it should return 0 if no match is found', () => {
    expect(minSubArrayLenON([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toEqual(0)
  })
  test('it should return the minimal length of a contiguous subarray that is equal to or greater than the target number', () => {
    expect(minSubArrayLenON([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toEqual(5)
  })
})

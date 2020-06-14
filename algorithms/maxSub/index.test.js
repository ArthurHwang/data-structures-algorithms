const { maxSubON, maxSubON2 } = require('./index')

describe('maxSubON2', () => {
  test('it should be a function', () => {
    expect(typeof maxSubON2).toEqual('function')
  })
  test('it should return null if num is greater than array length', () => {
    expect(maxSubON2([1, 2, 3, 4], 20)).toEqual(null)
  })
  test('it should return the correct value', () => {
    expect(maxSubON2([100, 200, 300, 400], 2)).toEqual(700)
    expect(maxSubON2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39)
  })
})

describe('maxSubON', () => {
  test('it should be a function', () => {
    expect(typeof maxSubON).toEqual('function')
  })
  test('it should return null if num is greater than array length', () => {
    expect(maxSubON([1, 2, 3, 4], 20)).toEqual(null)
  })
  test('it should return the correct value', () => {
    expect(maxSubON([100, 200, 300, 400], 2)).toEqual(700)
    expect(maxSubON([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39)
  })
})

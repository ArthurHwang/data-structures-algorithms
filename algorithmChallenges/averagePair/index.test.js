const averagePair = require('./index')

describe('averagePair', () => {
  test('it should be a function', () => {
    expect(typeof averagePair).toEqual('function')
  })
  test('it should return undefined if array is empty', () => {
    expect(averagePair([], 2.5)).toBe(undefined)
  })
  test('it should return undefined if target is not passed as an argument', () => {
    expect(averagePair([1, 2, 3])).toEqual(undefined)
  })
  test('it should return false if no average pair is found', () => {
    expect(averagePair([1, 2, 3], 5)).toEqual(false)
  })
  test('it should return true if an average pair is found', () => {
    expect(averagePair([1, 2, 3], 2.5)).toEqual(true)
  })
})

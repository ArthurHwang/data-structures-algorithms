const countUniqueValues = require('./index')

describe('countUniqueValues', () => {
  test('it should be a function', () => {
    expect(typeof countUniqueValues).toEqual('function')
  })
  test('it should return undefined if passed argument is not an array', () => {
    expect(countUniqueValues('hi')).toEqual(undefined)
  })
  test('it should return 0 if empty array is passed', () => {
    expect(countUniqueValues([])).toEqual(0)
  })
  test('it should return the correct number of unique values', () => {
    expect(countUniqueValues([1, 2, 2, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 7])).toEqual(6)
  })
})

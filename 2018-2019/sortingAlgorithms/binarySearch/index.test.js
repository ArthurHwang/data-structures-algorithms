const binarySearch = require('./index')

describe('binarySearch', () => {
  test('it should be a function', () => {
    expect(typeof binarySearch).toEqual('function')
  })
  test('it should return -1 if no value is found', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1)
  })
  test('it should return the index of the correct value if the value is found', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toEqual(3)
  })
})

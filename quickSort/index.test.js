const quickSort = require('./index')

describe('quickSort', () => {
  test('it should be a function', () => {
    expect(typeof quickSort).toEqual('function')
  })
  test('it should return a sorted array', () => {
    expect(quickSort([5, 4, -5, 3, 2, 1])).toEqual([-5, 1, 2, 3, 4, 5])
  })
})

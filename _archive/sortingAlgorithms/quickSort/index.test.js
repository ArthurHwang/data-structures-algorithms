const { quickSort, partition } = require('./index')

describe('partition', () => {
  test('it should be a function', () => {
    expect(typeof partition).toEqual('function')
  })
  test('it should return the correct pivot index', () => {
    expect(partition([5, 4, -5, 3, 2, 1])).toEqual(5)
  })
})

describe('quickSort', () => {
  test('it should be a function', () => {
    expect(typeof quickSort).toEqual('function')
  })
  test('it should return a sorted array', () => {
    expect(quickSort([5, 4, -5, 3, 2, 1])).toEqual([-5, 1, 2, 3, 4, 5])
  })
})

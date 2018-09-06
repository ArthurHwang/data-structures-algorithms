const mergeSort = require('./index')

describe('mergeSort', () => {
  test('it should be a function', () => {
    expect(typeof mergeSort).toEqual('function')
  })
  test('it should return a sorted array', () => {
    expect(mergeSort([2, -5, 3, 100, -100, -5, 3, -5, 4])).toEqual([-100, -5, -5, -5, 2, 3, 3, 4, 100])
  })
})

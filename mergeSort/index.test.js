const { mergeSort, merge } = require('./index')

describe('merge', () => {
  test('it should be a function', () => {
    expect(typeof merge).toEqual('function')
  })
  test('it should return a sorted merged array of two sorted arrays', () => {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6])
  })
})

describe('mergeSort', () => {
  test('it should be a function', () => {
    expect(typeof mergeSort).toEqual('function')
  })
  test('it should return a sorted array', () => {
    expect(mergeSort([2, -5, 3, 100, -100, -5, 3, -5, 4])).toEqual([-100, -5, -5, -5, 2, 3, 3, 4, 100])
  })
})

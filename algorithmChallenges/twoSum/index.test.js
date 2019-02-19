const { twoSum, twoSum2 } = require('./index.js')

describe('twoSum', () => {
  test('it should be a function', () => {
    expect(typeof twoSum).toEqual('function')
  })
  test('it should return the correct index that matches target', () => {
    expect(twoSum([2, 3, 4, 5, 6, 4], 10)).toEqual([2, 4])
  })
  test('it should return undefined if no array is passed', () => {
    expect(twoSum()).toEqual(undefined)
  })
  test('it should return undefined if passed argument is not of Array type', () => {
    expect(twoSum('hello', 20)).toEqual(undefined)
  })
})

describe('twoSum2', () => {
  test('it should be a function', () => {
    expect(typeof twoSum2).toEqual('function')
  })
  test('it should return the correct index that matches target', () => {
    expect(twoSum2([2, 3, 4, 5, 6, 4], 10)).toEqual([2, 4])
  })
  test('it should return undefined if no array is passed', () => {
    expect(twoSum2()).toEqual(undefined)
  })
  test('it should return undefined if passed argument is not of Array type', () => {
    expect(twoSum2('hello', 20)).toEqual(undefined)
  })
})

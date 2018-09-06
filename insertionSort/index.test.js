const { insertionSortV1, insertionSortV2 } = require('./index')

describe('insertionSortV1', () => {
  test('it should be a function', () => {
    expect(typeof insertionSortV1).toEqual('function')
  })
  test('it should return undefined if no array length', () => {
    expect(insertionSortV1([])).toEqual(undefined)
  })
  test('it should return undefined if passed argument is not an array', () => {
    expect(insertionSortV1('hi')).toEqual(undefined)
  })
  test('it should return a sorted array', () => {
    expect(insertionSortV1([2, 1, 9, 75, 4, 3, -50, 20, 30])).toEqual([-50, 1, 2, 3, 4, 9, 20, 30, 75])
  })
})

describe('insertionSortV2', () => {
  test('it should be a function', () => {
    expect(typeof insertionSortV2).toEqual('function')
  })
  test('it should return undefined if no array length', () => {
    expect(insertionSortV2([])).toEqual(undefined)
  })
  test('it should return undefined if passed argument is not an array', () => {
    expect(insertionSortV2('hi')).toEqual(undefined)
  })
  test('it should return a sorted array', () => {
    expect(insertionSortV2([2, 1, 9, 75, 4, 3, -50, 20, 30])).toEqual([-50, 1, 2, 3, 4, 9, 20, 30, 75])
  })
})

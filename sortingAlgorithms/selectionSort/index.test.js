const { selectionSortV1, selectionSortV2 } = require('./index')

describe('selectionSortV1', () => {
  test('it should be a function', () => {
    expect(typeof selectionSortV1).toEqual('function')
  })
  test('it should return undefined if passed parameter is not an array', () => {
    expect(selectionSortV1('12342-4')).toEqual(undefined)
  })
  test('it should return undefined if array has no length', () => {
    expect(selectionSortV1([])).toEqual(undefined)
  })
  test('it should return a sorted array', () => {
    expect(selectionSortV1([5, 4, 3, 2, 1, -10, -50, 33, 1, 2, 3])).toEqual([-50, -10, 1, 1, 2, 2, 3, 3, 4, 5, 33])
  })
})

describe('selectionSortV2', () => {
  test('it should be a function', () => {
    expect(typeof selectionSortV2).toEqual('function')
  })
  test('it should return undefined if passed parameter is not an array', () => {
    expect(selectionSortV2('12342-4')).toEqual(undefined)
  })
  test('it should return undefined if array has no length', () => {
    expect(selectionSortV2([])).toEqual(undefined)
  })
  test('it should return a sorted array', () => {
    expect(selectionSortV2([5, 4, 3, 2, 1, -10, -50, 33, 1, 2, 3])).toEqual([-50, -10, 1, 1, 2, 2, 3, 3, 4, 5, 33])
  })
})

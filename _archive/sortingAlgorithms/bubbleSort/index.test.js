const { bubbleSortUO, bubbleSortES6, bubbleSortOP } = require('./index')

describe('bubbleSortUO', () => {
  test('it should be a function', () => {
    expect(typeof bubbleSortUO).toEqual('function')
  })
  test('it should return null if empty array is passed', () => {
    expect(bubbleSortUO([])).toEqual(null)
  })
  test('it should undefined if data type of passed argument is not array', () => {
    expect(bubbleSortUO('hello')).toEqual(undefined)
  })
  test('it should return a sorted array', () => {
    expect(bubbleSortUO([-10, 2, -50, 4, 3, 8, 9])).toEqual([-50, -10, 2, 3, 4, 8, 9])
  })
})

describe('bubbleSortES6', () => {
  test('it should be a function', () => {
    expect(typeof bubbleSortES6).toEqual('function')
  })
  test('it should return null if empty array is passed', () => {
    expect(bubbleSortES6([])).toEqual(null)
  })
  test('it should undefined if data type of passed argument is not array', () => {
    expect(bubbleSortES6('hello')).toEqual(undefined)
  })
  test('it should return a sorted array', () => {
    expect(bubbleSortES6([-10, 2, -50, 4, 3, 8, 9])).toEqual([-50, -10, 2, 3, 4, 8, 9])
  })
})

describe('bubbleSortOP', () => {
  test('it should be a function', () => {
    expect(typeof bubbleSortOP).toEqual('function')
  })
  test('it should return null if empty array is passed', () => {
    expect(bubbleSortOP([])).toEqual(null)
  })
  test('it should undefined if data type of passed argument is not array', () => {
    expect(bubbleSortOP('hello')).toEqual(undefined)
  })
  test('it should return a sorted array', () => {
    expect(bubbleSortOP([-10, 2, -50, 4, 3, 8, 9])).toEqual([-50, -10, 2, 3, 4, 8, 9])
  })
})

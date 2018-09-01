const { sameON, sameON2 } = require('./index')

describe('sameON2', () => {
  test('it should be a function', () => {
    expect(typeof sameON2).toBe('function')
  })
  test('it should return undefined if one or both arguments is not passed', () => {
    expect(sameON2([1, 2, 3])).toEqual(undefined)
    expect(sameON2('', [1, 2, 3])).toEqual(undefined)
    expect(sameON2()).toEqual(undefined)
  })
  test('it should return false if array lengths do not match', () => {
    expect(sameON2([1, 2, 3], [1, 2, 3, 4])).toEqual(false)
  })
  test('it should return false if array2 elements are not equal to the square of the elements in array1', () => {
    expect(sameON2([1, 2, 3], [1, 4, 10])).toEqual(false)
  })
  test('it should return true if array2 elements are equal to the square of array1 elements', () => {
    expect(sameON2([1, 2, 3], [1, 4, 9])).toEqual(true)
  })
})

describe('sameON', () => {
  test('it should be a function', () => {
    expect(typeof sameON).toBe('function')
  })
  test('it should return undefined if one or both arguments is not passed', () => {
    expect(sameON([1, 2, 3])).toEqual(undefined)
    expect(sameON('', [1, 2, 3])).toEqual(undefined)
    expect(sameON()).toEqual(undefined)
  })
  test('it should return false if array lengths do not match', () => {
    expect(sameON([1, 2, 3], [1, 2, 3, 4])).toEqual(false)
  })
  test('it should return false if array2 elements are not equal to the square of the elements in array1', () => {
    expect(sameON([1, 2, 3], [1, 4, 10])).toEqual(false)
  })
  test('it should return true if array2 elements are equal to the square of array1 elements', () => {
    expect(sameON([1, 2, 3], [1, 4, 9])).toEqual(true)
  })
})

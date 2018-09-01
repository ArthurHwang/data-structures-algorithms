const { sumZeroON2, sumZeroON } = require('./sumZero')

describe('sumZeroON2', () => {
  test('it should be a function', () => {
    expect(typeof sumZeroON2).toEqual('function')
  })
  test('it should return undefined if no matches are found', () => {
    expect(sumZeroON2([-2, -1, 3, 5])).toEqual(undefined)
  })
  test('it should return an array with correct numbers that equal zero', () => {
    const expected = [-1, 1]
    expect(sumZeroON2([-2, -1, 1, 3])).toEqual(expect.arrayContaining(expected))
  })
})

describe('sumZeroON', () => {
  test('it should be a function', () => {
    expect(typeof sumZeroON).toEqual('function')
  })
  test('it should return undefined if no matches are found', () => {
    expect(sumZeroON([-2, -1, 3, 5])).toEqual(undefined)
  })
  test('it should return an array with correct numbers that equal zero', () => {
    const expected = [-1, 1]
    expect(sumZeroON([-2, -1, 1, 3])).toEqual(expect.arrayContaining(expected))
  })
})

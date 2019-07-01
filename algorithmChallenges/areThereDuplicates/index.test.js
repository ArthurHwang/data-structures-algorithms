const { areThereDuplicatesFREQ, areThereDuplicatesPOINT } = require('./index')

describe('areThereDuplicatesPOINT', () => {
  test('it should be a function', () => {
    expect(typeof areThereDuplicatesPOINT).toEqual('function')
  })
  test('it should return false if there are no duplicate arguments', () => {
    expect(areThereDuplicatesPOINT(1, 2, 3)).toEqual(false)
    expect(areThereDuplicatesPOINT('a', 'b', 'c')).toEqual(false)
  })
  test('it should return true if there are duplicate arguments', () => {
    expect(areThereDuplicatesPOINT(1, 1, 1)).toEqual(true)
    expect(areThereDuplicatesPOINT(1, 3, 5, 5, 5)).toEqual(true)
  })
})


describe('areThereDuplicatesFREQ', () => {
  test('it should be a function', () => {
    expect(typeof areThereDuplicatesFREQ).toEqual('function')
  })
  test('it should return false if there are no duplicate arguments', () => {
    expect(areThereDuplicatesFREQ(1, 2, 3)).toEqual(false)
    expect(areThereDuplicatesFREQ('a', 'b', 'c')).toEqual(false)
  })
  test('it should return true if there are duplicate arguments', () => {
    expect(areThereDuplicatesFREQ(1, 1, 1)).toEqual(true)
    expect(areThereDuplicatesFREQ(1, 3, 5, 5, 5)).toEqual(true)
  })
})

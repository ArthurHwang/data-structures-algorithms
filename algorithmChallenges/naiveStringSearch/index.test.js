const nativeStringSearch = require('./index')

describe('nativeStringSearch', () => {
  test('it should be a function', () => {
    expect(typeof nativeStringSearch).toEqual('function')
  })
  test('it should return 0 if no matches are found', () => {
    expect(nativeStringSearch('wowwhatthe', 'hey')).toEqual(0)
  })
  test('it should return the correct number of times substring appears in string', () => {
    expect(nativeStringSearch('lomgzomgbomg', 'omg')).toEqual(3)
  })
})

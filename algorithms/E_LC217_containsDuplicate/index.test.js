const { containsDuplicate } = require('./index');

describe('containsDuplicate', () => {
  test('it should return false if input array is empty', () => {
    expect(containsDuplicate([])).toEqual(false);
  });
  test('it should return undefined input type is not an array', () => {
    expect(containsDuplicate('hello')).toEqual(undefined);
  });
  test('it should return the correct output', () => {
    expect(containsDuplicate([2, 7, 11, 15])).toEqual(false);
    expect(containsDuplicate([2, 7, 7, 15])).toEqual(true);
  });
});

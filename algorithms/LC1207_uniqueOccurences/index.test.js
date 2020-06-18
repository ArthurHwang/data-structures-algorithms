const { uniqueOccurences } = require('./index');

describe('uniqueOccurences', () => {
  test('it should return undefined if input array is empty', () => {
    expect(uniqueOccurences([])).toStrictEqual(undefined);
  });
  test('it should return undefined input type is not an array', () => {
    expect(uniqueOccurences('hello')).toStrictEqual(undefined);
  });
  test('it should return true if there is only one item in input array', () => {
    expect(uniqueOccurences('hello')).toStrictEqual(undefined);
  });
  test('it should return false if occurences are not unique', () => {
    expect(uniqueOccurences([1, 2, 3, 3, 3, 3, 3, 4, 5])).toStrictEqual(false);
  });
  test('it should return true if occurences are unique', () => {
    expect(
      uniqueOccurences([1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 5, 5, 5, 5, 5])
    ).toStrictEqual(false);
  });
});

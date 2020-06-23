const { shuffle } = require('./index');

describe('shuffle', () => {
  test('it should return undefined if input array is empty', () => {
    expect(shuffle([], 0)).toEqual(undefined);
  });
  test('it should return undefined input type is not an array', () => {
    expect(shuffle('hello', 0)).toEqual(undefined);
  });
  test('it should return the correct output array', () => {
    expect(shuffle([2, 5, 1, 3, 4, 7], 3)).toEqual([2, 3, 5, 4, 1, 7]);
  });
});

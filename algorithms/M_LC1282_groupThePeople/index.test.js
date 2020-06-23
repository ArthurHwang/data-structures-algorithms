const { groupThePeople } = require('./index');

describe('groupThePeople', () => {
  test('it should return undefined if input array is empty', () => {
    expect(groupThePeople([])).toEqual(undefined);
  });
  test('it should return undefined input type is not an array', () => {
    expect(groupThePeople('hello')).toEqual(undefined);
  });
  test('it should return the correct output array with subarrays', () => {
    expect(groupThePeople([3, 3, 3, 3, 3, 1, 3])).toEqual([
      [0, 1, 2],
      [5],
      [3, 4, 6],
    ]);
    expect(groupThePeople([2, 1, 3, 3, 3, 2])).toEqual([
      [1],
      [2, 3, 4],
      [0, 5],
    ]);
  });
});

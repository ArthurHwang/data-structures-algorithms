const { twoSum } = require('./index');

describe('twoSum', () => {
  test('it should return undefined if input array is empty', () => {
    expect(twoSum([], 9)).toEqual(undefined);
  });
  test('it should return undefined input type is not an array', () => {
    expect(twoSum('hello')).toEqual(undefined);
  });
  test('it should return the correct output array with subarrays', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([2, 7, 11, 15], 26)).toEqual([2, 3]);
  });
});

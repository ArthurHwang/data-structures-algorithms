const { maxSubArray } = require('./index');

describe('maxSubArray', () => {
  test('it should return zero if input array is empty', () => {
    expect(maxSubArray([])).toEqual(0);
  });
  test('it should return the first item if array has 1 item and is greater than zero', () => {
    expect(maxSubArray([5])).toEqual(5);
    expect(maxSubArray([-5])).toEqual(0);
  });
  test('it should return undefined input type is not an array', () => {
    expect(maxSubArray('hello')).toEqual(undefined);
  });
  test('it should return the correct output array with subarrays', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });
});

const { productExceptSelf } = require('./index');

describe('productExceptSelf', () => {
  test('it should return undefined if input array is empty', () => {
    expect(productExceptSelf([])).toEqual([]);
  });
  test('it should return undefined input type is not an array', () => {
    expect(productExceptSelf('hello')).toEqual(undefined);
  });
  test('it should return the correct output array with subarrays', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
});

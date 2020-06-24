const { maxProfit } = require('./index');

describe('maxProfit', () => {
  test('it should return zero if input array has length of 1 or less', () => {
    expect(maxProfit([])).toEqual(0);
  });
  test('it should return undefined input type is not an array', () => {
    expect(maxProfit('hello')).toEqual(undefined);
  });
  test('it should return the correct output array with subarrays', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });
});

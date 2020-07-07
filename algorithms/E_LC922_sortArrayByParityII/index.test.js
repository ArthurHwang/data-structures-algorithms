const { sortArrayByParityII } = require('.');

describe('sortArrayByParityII', () => {
  test('it should return undefined if input is not of type Array', () => {
    expect(sortArrayByParityII(5)).toEqual(undefined);
  });
  test('it should return -1 if no Array length', () => {
    expect(sortArrayByParityII([])).toEqual(-1);
  });
  test('it should return correct output array', () => {
    expect(sortArrayByParityII([4, 2, 5, 7])).toEqual([4, 5, 2, 7]);
  });
});

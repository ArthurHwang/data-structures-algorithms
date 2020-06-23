const { createTargetArray } = require('./index');

describe('createTargetArray', () => {
  test('it should return undefined if either input is not of type Array', () => {
    expect(createTargetArray('', [])).toEqual(undefined);
    expect(createTargetArray([], 5)).toEqual(undefined);
  });
  test('it should return undefined either Array input is empty', () => {
    expect(createTargetArray([], [1, 2, 3, 4])).toEqual(undefined);
  });
  test('it should return the correct target Array', () => {
    expect(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])).toEqual([
      0,
      4,
      1,
      3,
      2,
    ]);
  });
});

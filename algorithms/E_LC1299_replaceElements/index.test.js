const { replaceElements } = require('./index');

describe('replaceElements', () => {
  test('it should return an empty array if input array is empty', () => {
    expect(replaceElements([])).toEqual([]);
  });
  test('it should return undefined input type is not an array', () => {
    expect(replaceElements('hello')).toEqual(undefined);
  });
  test('it should return the correct output array with replace elements', () => {
    expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1]);
  });
});

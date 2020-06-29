const { reverseString } = require('.');

describe('reverseString', () => {
  test('it should return undefined if input is not an Array', () => {
    expect(reverseString()).toEqual(undefined);
  });
  test('it should reverse the input Array in place', () => {
    expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual([
      'o',
      'l',
      'l',
      'e',
      'h',
    ]);
  });
});

const { firstUniqChar } = require('.');

describe('firstUniqChar', () => {
  test('it should return -1 if string length is 0', () => {
    expect(firstUniqChar('')).toEqual(-1);
  });
  test('it should return the index of first unique character', () => {
    expect(firstUniqChar('leetcode')).toEqual(0);
  });
  test('it should return -1 if no unique character is found', () => {
    expect(firstUniqChar('aaaaaaabbbbbccc')).toEqual(-1);
  });
});

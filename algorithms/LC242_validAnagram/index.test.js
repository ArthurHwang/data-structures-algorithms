const { validAnagram } = require('.');

describe('anagram', () => {
  test('it should return false the both string lengths are not equal', () => {
    expect(validAnagram('haha', 'hi')).toStrictEqual(false);
  });
  test('it should return false if one or more arguments is not of type string', () => {
    expect(validAnagram(5, 'hi')).toStrictEqual(false);
    expect(validAnagram('hi', 5)).toStrictEqual(false);
  });
  test('it should return false if one or more input string has no length', () => {
    expect(validAnagram('', 'hi')).toStrictEqual(false);
  });
  test('it should return false if two strings are not valid anagrams', () => {
    expect(validAnagram('iceman', 'manicp')).toStrictEqual(false);
  });
  test('it should return true if two strings are valid anagrams', () => {
    expect(validAnagram('iceman', 'manice')).toStrictEqual(true);
  });
});

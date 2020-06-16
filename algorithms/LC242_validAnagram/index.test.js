const { validAnagram } = require('.');

describe('anagram', () => {
  test('it should return false the both string lengths are not equal', () => {
    expect(anagram('haha', 'hi')).toStrictEqual(false);
  });
  test('it should return false if one or more arguments is not of type string', () => {
    expect(anagram(5, 'hi')).toStrictEqual(false);
    expect(anagram('hi', 5)).toStrictEqual(false);
  });
  test('it should return false if one or more input string has no length', () => {
    expect(anagram('', 'hi')).toStrictEqual(false);
  });
  test('it should return false if two strings are not valid anagrams', () => {
    expect(anagram('iceman', 'manicp')).toStrictEqual(false);
  });
  test('it should return true if two strings are valid anagrams', () => {
    expect(anagram('iceman', 'manice')).toStrictEqual(true);
  });
});

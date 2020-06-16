// Given two strings s and t , write a function to determine if t is an anagram of s.

function validAnagram(str1 = '', str2 = '') {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') return false;
  if (!str1.length || !str2.length) return false;

  const hashOne = {};
  const hashTwo = {};

  for (const char of str1) {
    hashOne[char] = hashOne[char] + 1 || 1;
  }

  for (const char of str2) {
    hashTwo[char] = hashTwo[char] + 1 || 1;
  }

  for (const key in hashOne) {
    if (hashTwo[key] !== hashOne[key]) {
      return false;
    }
  }
  return true;
}

module.exports = { validAnagram };

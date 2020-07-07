// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

module.exports.firstUniqChar = (s) => {
  if (typeof s !== 'string') return undefined;
  if (!s.length) return -1;

  const map = new Map();

  for (const char of s) map.set(char, map.get(char) + 1 || 1);

  for (const [index, char] of s.split('').entries()) {
    if (map.get(char) === 1) {
      return index;
    }
  }

  return -1;
};

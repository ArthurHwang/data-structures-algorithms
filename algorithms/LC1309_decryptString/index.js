// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.

module.exports.decryptString = (s) => {
  if (typeof s !== 'string') return undefined;
  if (!s.length) return undefined;

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const nums = [];
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === '#') {
      nums.push(s[i] + s[i + 1]);
      i += 2;
    } else {
      nums.push(s[i]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] -= 1;
    result.push(alphabet[nums[i]]);
  }

  return result.join('');
};

// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

module.exports.balancedStringSplit = (s) => {
  if (typeof s !== 'string') return undefined;
  if (!s.length) return undefined;

  let count = 0;
  let equalityCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      equalityCount++;
    } else {
      equalityCount--;
    }
    if (equalityCount === 0) {
      count++;
    }
  }

  return count;
};

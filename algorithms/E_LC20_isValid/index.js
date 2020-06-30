// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
module.exports.isValid = (s) => {
  if (s.length % 2 !== 0) return false;
  if (typeof s !== 'string') return false;
  if (!s.length) return false;

  const brackets = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  const stack = [];

  for (const bracket of s) {
    if (brackets[bracket]) {
      stack.push(bracket);
    } else if (bracket !== brackets[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 0;
};

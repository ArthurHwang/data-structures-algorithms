// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

// Example 1:

// Input: "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

// Note:

// 1 <= S.length <= 20000
// S consists only of English lowercase letters.
/**
 * @param {string} S
 * @return {string}
 */

//  Assumptions
// Always lowercase letters
// could be something other than a string

var removeDuplicates = function(S) {
  if (typeof S !== 'string') return 'please supply a valid string input';

  const stringArr = S.split('');
  let pointer = 0;

  while (pointer < stringArr.length) {
    if (stringArr[pointer] === stringArr[pointer + 1]) {
      stringArr.splice(pointer, 2);
      pointer = 0;
    } else {
      pointer++;
    }
  }

  return stringArr.join('');
};
console.log(removeDuplicates('abbaca'));

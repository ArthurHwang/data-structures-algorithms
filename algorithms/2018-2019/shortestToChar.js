// Share
// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

// Note:

// S string length is in [1, 10000].
// C is a single character, and guaranteed to be in string S.
// All letters in S and C are lowercase.
// Accepted
// 54,768
// Submissions
// 83, 427

var shortestToChar = function(S, C) {
  if (typeof S !== 'string' || C.length < 1)
    return 'please supply valid arguments';
  // loop over S

  const payload = [];

  for (let i = 0; i < S.length; i++) {
    payload.push(getClosest(S, C, i));
  }

  return payload;
};

function getClosest(S, C, i) {
  if (S[i] === C) return 0;

  let j = 1;

  while (i >= 0 || i <= S.length) {
    if (S[i + j] === C || S[i - j] === C) {
      return j;
    }
    j++;
  }
}

console.log(shortestToChar('loveleetcode', 'e'));

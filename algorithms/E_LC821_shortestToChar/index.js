// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

var shortestToChar = function (S, C) {
  const idxChars = [];
  const result = [];

  for (const [idx, char] of S.split('').entries()) {
    if (char === C) {
      idxChars.push(idx);
    }
  }

  for (let i = 0; i < S.length; i++) {
    let minDistance = Infinity;
    for (let j = 0; j < idxChars.length; j++) {
      minDistance = Math.min(minDistance, Math.abs(idxChars[j] - i));
    }
    result.push(minDistance);
  }

  return result;
};

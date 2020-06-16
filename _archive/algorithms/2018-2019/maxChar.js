// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // type check str parameter
  if (typeof str !== 'string') return 'please supply a valid string';

  // create map data structure to store counts
  const map = {};
  // loop over string, populate map object with frequencies
  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }
  // create a temporary max count variable

  let maxCount = -Infinity;
  let maxChar = null;
  // loop over frequency objects and call Math.max() to get max of every iteration
  for (let char in map) {
    maxCount = Math.max(maxCount, map[char]);

    if (maxCount === map[char]) {
      maxChar = char;
    }
  }
  // return max count
  return maxChar;
}

console.log(maxChar('aaaaaaaaaaaaabcdefg'));

module.exports = maxChar;

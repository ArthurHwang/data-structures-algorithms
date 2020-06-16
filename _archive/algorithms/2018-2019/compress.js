// 434. Number of Segments in a String
// Easy

// 180

// 676

// Add to List

// Share
// Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

// Please note that the string does not contain any non-printable characters.

// Example:

// Input: "Hello, my name is John"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  if (!s) return 0;

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') count++;
  }

  return count + 1;
};
console.log(countSegments('My name is john'));

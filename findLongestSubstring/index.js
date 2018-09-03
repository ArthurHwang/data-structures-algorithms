const { performance } = require('perf_hooks')

// Write a function called findLongestSubstring, which accepts
// a string and returns the length of the longest substring with all
// distinct characters

// o(n) solution

function findLongestSubstring(str) {
  if (!str) return null
  let longest = 0
  let seen = {}
  let start = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (seen[char]) {
      start = Math.max(start, seen[char])
    }
    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1
  }
  return longest
}

module.exports = findLongestSubstring

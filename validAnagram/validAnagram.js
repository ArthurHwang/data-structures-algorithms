const { performance } = require("perf_hooks");

// Given two strings, write a function to determine if the second string is an anagram of the first.

// o(n) solution
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const mapper = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    mapper[letter] ? (mapper[letter] += 1) : (mapper[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!mapper[letter]) {
      return false;
    } else {
      mapper[letter] -= 1;
    }
    return true;
  }
}

console.log(validAnagram("hi", "zi"));

// performance
let t1 = performance.now();
validAnagram("hello", "lleoh");
let t2 = performance.now();
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`);

module.exports = validAnagram;

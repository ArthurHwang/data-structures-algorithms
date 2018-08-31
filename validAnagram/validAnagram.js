const { performance } = require("perf_hooks");

// Given two strings, write a function to determine if the second string is an anagram of the first.

function validAnagram(string1, string2) {
  if (!string1 || !string2) return undefined;
  if (string1.length !== string2.length) return false;

  const stringObj1 = {};
  const stringObj2 = {};

  for (let char of string1) {
    stringObj1[char] = (stringObj1[char] || 0) + 1;
  }

  for (let char of string2) {
    stringObj2[char] = (stringObj2[char] || 0) + 1;
  }

  console.log(Object.keys(stringObj1));
  console.log(Object.keys(stringObj2));

  for (let key in stringObj1) {
    if (!(key in stringObj2)) {
      return false;
    }

    if (stringObj1[key] !== stringObj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(validAnagram("fucking", "kucfani"));
module.exports = validAnagram;

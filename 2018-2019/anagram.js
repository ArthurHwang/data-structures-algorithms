// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function sanitize(string) {
  return string.replace(/\s/gi, '');
}

function anagrams(stringA, stringB) {
  // type check strings

  if (typeof stringA !== 'string' || typeof stringB !== 'string')
    return 'please supply a valid string';

  // length check strings
  if (!stringA.length || !stringB.length) return null;
  if (stringA.length !== stringB.length) return false;
  // create a dictionary object for string A to store frequency
  const map = {};

  // loop over stringA, populate dictionary
  for (let char of sanitize(stringA)) {
    map[char] = map[char] + 1 || 1;
  }

  // loop over stringB and lookup key in map, if exists, decrease by 1
  for (let char of sanitize(stringB)) {
    if (!map[char]) {
      // if a zero is ever encountered return false
      return false;
    } else {
      map[char]--;
    }
  }

  return true;
}

module.exports = anagrams;

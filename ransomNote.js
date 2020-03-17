// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

var canConstruct = function(ransomNote, magazine) {
  if (typeof ransomNote !== 'string' || typeof magazine !== 'string')
    return 'please supply a valid string';

  const map = {};

  for (let char of magazine) {
    map[char] = map[char] + 1 || 1;
  }

  for (let char of ransomNote) {
    if (map[char]) {
      map[char]--;
    } else {
      return false;
    }
  }
  return true;
}; // O(n)

// console.log(canConstruct('aa', 'aab'));
// console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
// console.log(canConstruct(3, 'ab'));

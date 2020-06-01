// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".

var reverseVowels = function(s) {
  //   split the array

  // create payload array
  const payload = [];
  const vowelsReverse = [];
  const encounteredVowels = {};
  //   loop over s and create map data struct encountered vowel and its index
  for (let [index, char] of s.split('').entries()) {
    if ('AEIOUaeiou'.includes(char)) {
      encounteredVowels[index] = char;
      vowelsReverse.push(char);
    }
  }

  const vowelReversal = vowelsReverse.reverse();

  for (let i = 0; i < s.length; i++) {
    if (encounteredVowels[i]) {
      payload.push(vowelReversal.shift());
    } else {
      payload.push(s[i]);
    }
  }
  // loop over s, if index encountered in object push, if not push s

  return payload.join('');
};

console.log(reverseVowels('hello'));
var isValid = function(s) {
  if (s.length % 2 !== 0) return false;

  const complement = {
    ']': '[',
    '}': '{',
    ')': '('
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if ('{(['.includes(s[i])) {
      stack.push(s[i]);
    } else if (stack[stack.length - 1] === complement[s[i]]) {
      stack.pop();
    }
  }

  return stack.length ? false : true;
};

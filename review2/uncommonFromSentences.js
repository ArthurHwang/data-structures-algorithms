// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words.

// You may return the list in any order.

// Example 1:

// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: A = "apple apple", B = "banana"
// Output: ["banana"]
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  // create a split variable of A
  const map = {};

  // loop over A and create map the frequencies of each word

  const payload = [];

  for (const word of A.split(' ')) {
    map[word] = map[word] + 1 || 1;
  }

  // loop over B, if item is undefined when lookup push to new array

  for (const word of B.split(' ')) {
    map[word] = map[word] + 1 || 1;
  }

  for (const key in map) {
    if (map[key] === 1) {
      payload.push(key);
    }
  }
  return payload;
};
console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));

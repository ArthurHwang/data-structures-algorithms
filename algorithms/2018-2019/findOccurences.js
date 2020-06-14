// Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

// For each such occurrence, add "third" to the answer, and return the answer.

// Example 1:

// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl","student"]
// Example 2:

// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we","rock"]

// Note:

// 1 <= text.length <= 1000
// text consists of space separated words, where each word consists of lowercase English letters.
// 1 <= first.length, second.length <= 10
// first and second consist of lowercase English letters.

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
// Assumptions
// String text will always be alpha numeric sentence

var findOcurrences = function(text, first, second) {
  // split the text into array
  const splitText = text.split(' ');
  // create a new payload array
  const payload = [];
  // loop over array,
  splitText.forEach((_, idx, arr) => {
    // if i and i + 1 = first and second, push the third into a new array
    if (arr[idx] === first && arr[idx + 1] === second && arr[idx + 2]) {
      payload.push(arr[idx + 2]);
    }
  });
  // return the payload
  return payload;
};

console.log(
  findOcurrences('alice is a good girl she is a good student', 'a', 'good')
);

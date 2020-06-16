// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  if (typeof str !== 'string') return 'please supply a valid string';
  if (!str.length) return undefined;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // create a dictionary empty
  const dictionary = {};
  // loop over string and create dictionary object with frequencies

  for (let char of str) {
    dictionary[char] = dictionary[char] + 1 || 1;
  }

  let count = 0;

  // loop over vowels array and update count from dictionary

  vowels.forEach(vowel => {
    if (dictionary[vowel]) {
      count += dictionary[vowel];
    }
  });

  return count;
}

console.log(vowels('Why'));
module.exports = vowels;

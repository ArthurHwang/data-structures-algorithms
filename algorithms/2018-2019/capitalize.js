// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  if (typeof str !== 'string') return 'please supply a valid string';
  if (!str.length) return null;

  let trimmedStr = str.trim().split(' ');

  return trimmedStr
    .map(word => {
      // return word[0].toUpperCase() + word.slice(1);
      return `${word[0].toUpperCase()}${word.slice(1)}`;
    })
    .join(' ');
}

capitalize('a short sentence');

module.exports = capitalize;

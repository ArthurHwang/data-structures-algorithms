//  Given a string, return a new string with the reversed order of characters

// Assumptions
// all alphanumeric characters
// always primitive string type

function reverse(str) {
  // add short circuit check if passed parameter is of type 'string'
  if (typeof str !== 'string') return 'please supply a string type';
  // create variable to hold .split() value of passed str parameter
  const strSplit = str.split('');
  // create and intilialize variable to hold empty array return
  const payload = [];
  // loop over the array, start iteration at end of array
  for (let i = strSplit.length - 1; i >= 0; i--) {
    // push the values to empty return array
    payload.push(strSplit[i]);
  }

  // return array with .join('') applied
  return payload.join('');
} // o(n)

function reverse2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

console.log(reverse('hello'));
console.log(reverse2('hello'));

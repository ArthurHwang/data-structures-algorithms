// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (typeof n !== 'number') return 'please supply a valid number';
  const numTransform = n.toString().split('');
  const payload = [];

  let isNegative = false;

  if (numTransform[0] === '-') isNegative = true;

  for (let i = 1; i < numTransform.length; i++) {
    payload.unshift(Number(numTransform[i]));
  }

  return isNegative
    ? Number(['-', ...payload].join(''))
    : Number([...payload].join(''));
}

console.log(reverseInt(-4321));

module.exports = reverseInt;

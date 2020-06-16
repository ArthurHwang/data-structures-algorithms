// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

function fizzBuzz(n) {
  if (n <= 0) return undefined;
  if (typeof n !== 'number') return undefined;

  const payload = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      payload.push('FIZZBUZZ');
    } else if (i % 5 === 0) {
      payload.push('BUZZ');
    } else if (i % 3 === 0) {
      payload.push('FIZZ');
    } else {
      payload.push(i);
    }
  }

  return payload;
}

module.exports = { fizzBuzz };

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

module.exports.uniqueOccurences = (arr) => {
  if (!Array.isArray(arr)) return undefined;
  if (!arr.length) return undefined;
  if (arr.length === 1) return true;

  const frequency = arr.reduce((acc, item) => {
    acc[item] = acc[item] + 1 || 1;

    return acc;
  }, {});

  const unique = new Set(Object.values(frequency));

  return unique.size === Object.keys(frequency).length;
};

// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
// Example 1:

// Input: 2
// Output: [0,1,1]
// Example 2:

// Input: 5
// Output: [0,1,1,2,1,2]

var countBits = function (num) {
	if (!num) return [];

	const result = [];

	for (let i = 0; i <= num; i++) {
		let binary = i.toString(2);
		let numOfOnes = binary.match(/1/gi) || 0;

		if (numOfOnes === 0) {
			result.push(0);
		} else {
			result.push(numOfOnes.length);
		}
	}
	return result;
};

console.log(countBits(5));

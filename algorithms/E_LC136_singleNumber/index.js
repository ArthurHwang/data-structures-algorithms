// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

var singleNumber = function (nums) {
	if (!nums || !nums.length) return null;
	if (!Array.isArray(nums)) return null;

	const hashMap = {};

	for (const num of nums) hashMap[num] = hashMap[num] + 1 || 1;

	for (const key in hashMap) {
		if (hashMap[key] === 1) {
			return +key;
		}
	}

	return null;
};

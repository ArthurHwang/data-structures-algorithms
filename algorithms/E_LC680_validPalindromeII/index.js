// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

const validPalindrome = s => {
	for (let i = 0; i < s.length / 2; i++) {
		let j = s.length - 1 - i;

		if (s[i] !== s[j]) {
			return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j));
		}
	}
	return true;
};

const cut = (s, idx) => s.substr(0, idx) + s.substr(idx + 1);
const isPalindrome = s => s === s.split('').reverse().join('');

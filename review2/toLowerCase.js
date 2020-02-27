// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Example 1:

// Input: "Hello"
// Output: "hello"
// Example 2:

// Input: "here"
// Output: "here"
// Example 3:

// Input: "LOVELY"
// Output: "lovely"
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  if (typeof str !== 'string') return undefined;

  return Array.prototype.map
    .call(str.split(''), char => {
      let charCode = char.charCodeAt(0);

      if (charCode > 64 && charCode < 97) {
        return String.fromCharCode(charCode + 32);
      } else {
        return char;
      }
    })
    .join('');
};

console.log(toLowerCase('HiHiEEEEEEEEeeeee'));

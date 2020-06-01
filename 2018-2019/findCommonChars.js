// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]

// Note:

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  const anchor = A[0];
  const payload = [];

  for (const char of anchor) {
    let existsAll = true;

    for (let i = 1; i < A.length; i++) {
      if (!A[i].includes(char)) {
        existsAll = false;
      }
    }
    if (existsAll) {
      payload.push(char);
    }
  }

  return payload;
};
console.log(commonChars(['bella', 'label', 'roller']));

var commonChars2 = function(A) {
  let payload = [...A[0]];
  // console.log(payload);

  for (let i = 1; i < A.length; i++) {
    payload = payload.filter(char => {
      debugger;
      const length = A[i].length;
      A[i] = A[i].replace(char, '');
      return length > A[i].length;
    });
  }

  return payload;
};

console.log(commonChars2(['bella', 'label', 'roller']));

// ['b', 'e', 'l', 'l', 'a']
// ['ella', 'label', 'roller'];

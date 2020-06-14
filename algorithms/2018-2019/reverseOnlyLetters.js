// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

// Example 1:

// Input: "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

// Note:

// S.length <= 100
// 33 <= S[i].ASCIIcode <= 122
// S doesn't contain \ or "
// Accepted

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  //     split the string into an array

  const splitStr = S.split('');
  //      create an hashMap to store all letters and its index seen
  const indexesSeen = [];
  const lettersSeen = [];

  //   loop over the string and check if it is a letter

  for (let [index, val] of splitStr.entries()) {
    if (
      (val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90) ||
      (val.charCodeAt(0) >= 97 && val.charCodeAt(0) <= 122)
    ) {
      indexesSeen.push(index);
      lettersSeen.push(val);
    }
  }

  lettersSeen.reverse();

  for (let i = 0; i < indexesSeen.length; i++) {
    splitStr[indexesSeen[i]] = lettersSeen[i];
  }

  return splitStr.join('');
};

console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));

const isLetter = letter =>
  (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) ||
  (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)
    ? true
    : false;

const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

const reverseLettersOnly = S => {
  const stringSplit = S.split('');
  let i = 0;
  let j = stringSplit.length - 1;

  while (i < j) {
    let left = stringSplit[i];
    let right = stringSplit[j];

    if (isLetter(left) && isLetter(right)) {
      swap(stringSplit, i, j);
      i++;
      j--;
    } else if (!isLetter(left)) i++;
    else j--;
  }
  return stringSplit.join('');
};

console.log(reverseLettersOnly('a-bC-dEf-ghIj'));

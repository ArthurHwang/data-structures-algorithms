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

var reverseOnlyLetters = function (S) {
  const alphas = [];
  const strArr = S.split('');

  for (let i = 0; i < strArr.length; i++) {
    const valid = /[a-zA-Z]/;
    if (valid.test(strArr[i])) {
      alphas.push(strArr[i]);
      strArr[i] = undefined;
    }
  }

  alphas.reverse();

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === undefined) {
      strArr[i] = alphas.shift();
    }
  }

  return strArr.join('');
};

console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'));

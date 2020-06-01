// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

function isPalindrome(string) {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    result = string[i] + result
  }
  return result === string
}

function _isPalindrome(string) {
  return (
    string
      .split('')
      .reverse()
      .join('') === string
  )
}

function __isPalindrome(string) {
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const stringCharacters = string
    .toLowerCase()
    .split('')
    .reduce((characters, character) => (validCharacters.indexOf(character) > -1 ? characters.concat(character) : characters), [])

  return stringCharacters.join('') === stringCharacters.reverse().join('')
}

__isPalindrome('WHAT')

module.exports = { isPalindrome, _isPalindrome, __isPalindrome }

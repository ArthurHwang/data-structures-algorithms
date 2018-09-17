// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not.Ignore numbers and punctuation.

function isPangram(string) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const str = string.toLowerCase()
  for (let i = 0; i < letters.length; i++) {
    if (!str.includes(letters[i])) {
      return false
    }
  }
  return true
}

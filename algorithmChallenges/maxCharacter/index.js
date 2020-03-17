// Given a string of characters, return the character that appears the most often.

function maxCharacter(str) {
  const countObj = {}

  for (let character of str) {
    countObj[character] = countObj[character] + 1 || 1
  }

  let maxCharacter = null
  let maxCount = 0
  for (let prop in countObj) {
    if (countObj[prop] > maxCount) {
      maxCount = countObj[prop]
      maxCharacter = prop
    }
  }

  // console.log(max)
  return maxCharacter
}

module.exports = maxCharacter

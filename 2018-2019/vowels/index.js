function vowels(str) {
  if (!str) {
    return null
  }

  if (typeof str !== 'string') {
    return undefined
  }
  const vowels = 'aeiou'.split('')
  let phrase = str.toLowerCase().split('')

  let total = phrase.reduce((counter, char) => (vowels.indexOf(char) > -1 ? counter + 1 : counter), 0)

  return total
}

function _vowels(str) {
  if (!str) {
    return null
  }

  if (typeof str !== 'string') {
    return undefined
  }

  const vowels = 'aeiou'.split('')
  let phrase = str.toLowerCase().split('')

  let count = 0
  phrase.forEach(item => {
    if (vowels.indexOf(item) > -1) {
      count++
    }
  })
  return count
}

module.exports = { vowels, _vowels }

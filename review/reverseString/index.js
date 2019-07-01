// Given a string of characters as input, write a function that returns it with the characters reversed.

const reverseString = string => {
  if (typeof string !== 'string' || string === '') {
    return undefined
  }

  let reversed = ''

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }

  return reversed
}

const _reverseString = string => {
  if (typeof string !== 'string' || string === '') {
    return undefined
  }
  return string
    .split('')
    .reverse()
    .join('')
}

const __reverseString = string => {
  if (typeof string !== 'string' || string === '') {
    return undefined
  }

  let result = ''

  for (let character of string) {
    result = character + result
    console.log(result)
  }

  return result
}

module.exports = { reverseString, _reverseString, __reverseString }

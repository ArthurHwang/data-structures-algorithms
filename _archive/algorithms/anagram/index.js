function anagram(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return undefined
  }

  const hashStr1 = {}
  const hashStr2 = {}

  for (let char of str1) {
    hashStr1[char] = hashStr1[char] + 1 || 1
  }

  for (let char of str2) {
    hashStr2[char] = hashStr2[char] + 1 || 1
  }

  let isObjEqual = objectValueEquality(hashStr1, hashStr2)

  return isObjEqual
}

function objectValueEquality(obj1, obj2) {
  const obj1Props = Object.getOwnPropertyNames(obj1)
  const obj2Props = Object.getOwnPropertyNames(obj2)

  if (obj1Props.length !== obj2Props.length) {
    return false
  }

  for (let i = 0; i < obj1Props.length; i++) {
    propertyName = obj1Props[i]
    if (obj1Props[propertyName] !== obj2Props[propertyName]) {
      return false
    }
  }

  return true
}

module.exports = anagram

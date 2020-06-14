const array = new Array(1000).fill(10).concat(new Array(1000).fill(55))
console.log(array)

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairs(array)

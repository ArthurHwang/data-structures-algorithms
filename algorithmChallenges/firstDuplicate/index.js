function firstDuplicate(arr) {
  const found = {}
  let min = Infinity

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        found[arr[j]] = j
      }
    }
  }

  for (key in found) {
    if (found[key] < min) {
      min = found[key]
    }
  }
  return min === Infinity ? -1 : arr[min]
}

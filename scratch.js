function averagePair(arr, target) {
  // add whatever parameters you deem necessary - good luck!

  if (arr.length === 0) {
    return false
  }
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    let avg = arr[start] + arr[end] / 2
    if (avg === target) {
      return true
    } else if (avg < target) {
      start++
      end--
    }
    return false
  }
}

averagePair([1, 2, 3], 2.5)

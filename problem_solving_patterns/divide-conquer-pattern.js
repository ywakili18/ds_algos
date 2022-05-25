//  This pattern involves dividing a data set into smaller chunks
// Then repeating a process with a subset of data.
// This pattern can decrease time compleixty.

// Example: binary search
// Given a sorted array of integers, write a function called search
// that accepts a value and returns the index where the value passed to the function is located.
// If the value is not found, return -1.

const binarySearch = (arr, val) => {
  let min = 0
  let max = arr.length - 1
  // 3

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentEl = arr[middle]

    if (currentEl < val) {
      min = middle + 1
    } else if (currentEl > val) {
      max = middle - 1
    } else {
      console.log(middle)
      return middle
    }
  }
  return -1
}
binarySearch([1, 2, 3, 4], 3)

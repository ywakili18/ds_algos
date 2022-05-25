// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0
  }
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      // increment operator
      i++
      arr[i] = arr[j]
    }
  }
  // return i + 1 since it hits the end of the array, ending with one short of value.
  console.log(i + 1)
}

countUniqueValues([-2, -1, -1, 0, 1])

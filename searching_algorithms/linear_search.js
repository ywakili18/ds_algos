// Write a function called linearSearch which accepts an array and a value,
// and returns the index at which the value exists.
// If the value does not exist in the array, return -1.

// This solution works
// Because it first checks if the index of the value exists by writing a for loop.
// If it doesn't, it will exit the for loop and return -1.
function linearSearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < arr.length; i++) {
    // i is the index.

    if (arr[i] === val) {
      return i
    }
  }
  return -1
}
linearSearch([10, 15, 20, 25, 30], 40)

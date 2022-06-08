// 1.) Start by picking the second element in the array.
// 2.) Compare the second element with the one before it and swap if necessary.
// 3.) Continue to the next element and if it is in the incorect order, iterate through the sorted portion
// - (i.e the left side to place the element in the correct place.)

function insertionSort(arr) {
  // start at index of 1
  for (let i = 1; i < arr.length; i++) {
    // current value
    let currVal = arr[i]
    // index assigned to variable
    let index = i
    // second loop, j is before i, greater then 0 AND the value has to be greater then currentValue from right side
    for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j]
      index = j
    }
    arr[index] = currVal
  }
  console.log(arr)
}
insertionSort([2, 3, 4, 5, 19, 2, 3, 4])

// The way that a bubble sort works is to:
// 1.) Compare each index in the array to each other.
// 2.) If the first index is bigger then the second index, swap the values, "bubbling" to the top of the array.
// 3.) This is primarily works with sorting numbers.

// Before sorting, we must swap.
// 1st way of swapping

// function swap(arr, idx1, idx2) {
//   // passing in the arr, index1, index 2 of that array.
//   // assing index 1 to temp variable
//   let temp = arr[idx1]
//   // swap the index1 to index2
//   arr[idx1] = arr[idx2]
//   // update array of index 2 with temp variable.
//   arr[idx2] = temp
// }

// 2nd way of swapping

// const swap2 = (arr, idx1, idx2) => {
//   ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// }

// ;[1, 4, 5]

// Bubble sort pseudocode:
// 1.) Start looping from the end of the array towards the beginning called "i" (loop backwards)
// 2.) Start an inner loop with a variable called j from the beginning until i-1
// 3.) If arr[j] is greater than arr[j+1] swap those two values using swap function. (not needed but cleaner code)
// 4.) Return the sorted array after the loop ends.
// 5.) To optimize solution and make sure that doesn't start a loop if everthing is sorted. (if we didnt swap anything, return the arr.)
function bubbleSort(arr) {
  let noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        // swap the index1 to index2
        arr[j] = arr[j + 1]
        // update array of index 2 with temp variable.
        arr[j + 1] = temp
        // set noSwaps to false
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  console.log(arr)
  return arr
}
bubbleSort([1, 5, 3, 9, 22, 3, 2])

// Time complexity is N^2 because of a nested loop and making multiple comparisons.
// But if data is nearly sorted, it is O(n).

// Bubble sort could be used primarily if data is nearly sorted. It may not be the best solution, but it sets up for more complex algorithms.`

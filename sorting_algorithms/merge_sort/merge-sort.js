// 1st part of merge sort algorithm
// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
// Given two arrays which are sorted,
// this helper function should create a new array which is also sorted,
// and consists of all the elements in the two input arrays.
// The function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it.

// pseudocode
// Create an empty array, take a look at the smallest values in each input array.
// While there are still values we haven't looked at...

// If the value in the first array is smaller than the value in the second array
// Push the value in the first array into our results and move on to the next value in the first array.

// If the value in the first array is larger than the value in the second array
// Push the value in the second array into our results and move on to the next value in the second array.

// Once we exhaust one array, push in all remaining values from the other array.
function merge(arr1, arr2) {
  let results = []
  // Break out of loop if any one of the array gets empty
  while (arr1.length && arr2.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (arr1[0] < arr2[0]) {
      results.push(arr1.shift())
    } else {
      results.push(arr2.shift())
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...results, ...arr1, ...arr2]
}
// merge([1, 10, 50], [2, 3, 5, 99, 100])

// Now the mergeSort pseudocode itself.
// Break up the array into halves until you have arrays that are empty or have one element. (slice method?)
// Once you have smaller sorted arrays, merge those arrays with other sroted arrays
// until you are back at the full length of the array.
// Once the array has been merged back together, return the merged (and sorted!) array
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  // halfway point of array
  let mid = Math.floor(arr.length / 2)
  // using mergeSort recursviely
  // using slice method to slice half the array until the mid waypoint, starting at index of 0.
  let left = mergeSort(arr.slice(0, mid))
  // using slide method to return the last half of the array, starting at the midway point onwards.
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}
mergeSort([10, 24, 76, 73, 72, 1, 9])

// time complexity: O(n log n)
// why?:
// imagine an array of 16 elements.
// it will divide as such:
// 16
// 8 8
// 4 4 4 4
// 2 2 2 2 2 2 2 2
// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
// in human words: 2 of What power, will give us n.
// the n before logN, is comparisions per decomposition. (meaning comparing indexes of each array)
// making this better then a quadratic time, and similar to a linear time.
// space complexity: O(n)

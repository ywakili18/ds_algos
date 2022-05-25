// Multi pointers

// Creating pointers or values that correspond to an index of position and move towards the beginning
// end, or middle based on a certain condition.

// Efficient for solving problems with minial space complexity as well.

// This is effcient if the array is sorted.
// An example:
// Write a function called sumZero which accepts a sorted array of integers. The function
// should find the first pair where the sum is 0. Return an array that includs both values that sum to zero or
// undefined if a pair does not exist.
// [-3,-2,-1,0,1,2,3] should be [-3,3]
// [-2,0,1,3] should be undefined
// [1,2,3] also undefined

// Solution
// Time Complexity - O(N)
// Space Complexity - O(1)
function sumZero(arr) {
  // left is the first index in the arr
  let left = 0
  // right last index in the array - 1
  let right = arr.length - 1
  // as long as the left value is less then the right value
  while (left < right) {
    // do the operation of both values
    let sum = arr[left] + arr[right]
    // if is 0, will return new array
    if (sum === 0) {
      console.log(arr[left], arr[right])
      return [arr[left], arr[right]]
    }
    // if greater then 0, will subtract 1 from the right, re-doing the while loop
    else if (sum > 0) {
      right--
    }
    // if sum not 0 or greater then 0, then will add one to the index of left, moving on to the next value and thus re-doing the while loop.
    else {
      left++
    }
  }
}
sumZero([-4, -3, -2, -1, 0, 5, 10])

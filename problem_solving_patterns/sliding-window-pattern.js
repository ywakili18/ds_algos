// This patter invovles creating a window
// which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

// example

// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.
// maxSubarraySum ([1,2,5,2,8,1,5], 2) should be 10.
// maxSubarraySum([],4) null.

function maxSubArraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0

  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
    // 6
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    // 1st time around:
    // 6 - 1 = 5
    // 5 + 2 = 7
    // tempSum = 7
    // 2nd time around
    // 7 - 5 = 2
    // 2 + 4 = 6
    maxSum = Math.max(maxSum, tempSum)
  }
  console.log(maxSum)
}

maxSubArraySum([1, 5, 2, 4], 2)

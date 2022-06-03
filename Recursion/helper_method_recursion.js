// function outer(input) {
//   let outerScopedVariable = []

//   function helper(helperInput) {
//     // modify the outerScopedVariable
//     helper(helperInput--)
//   }
//   helper(input)
//   return outerScopedVariable
// }

// Write a function that will collect all odd values in an array.

function collectOddValues(arr) {
  // use an empty data structure, in this case and empty array to store our results.
  let result = []
  function helper(helperInput) {
    // base case
    if (helperInput.length === 0) {
      return
    }
    // conditional that will check the first index of the array and see if it is an odd or even number
    if (helperInput[0] % 2 !== 0) {
      // if odd, push the first value of index[0]
      // into results.
      result.push(helperInput[0])
    }
    // call helper function again, this time returning new subarray slicing starting at index 1, after index 0.
    helper(helperInput.slice(1))
  }
  // calling function
  helper(arr)
  return result
}

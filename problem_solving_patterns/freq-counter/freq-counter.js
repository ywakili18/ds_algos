// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of the values must be the same.

// Test case:
// same([1,2,3],[4,1,9] is true)
// same([1,2,3],[1,9] is false because does not include 2^2)
// same([1,2,3],[4,4,1] is false because frequency is not the same. )

// A o(n) linear solution

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  // we use an object, to count the indivual values in each array.
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  // below takes the value in index of each array, then will add 1 to the number of times it appears in that array, essentially acting as a counter.
  // the 0 is there to check if the value has been counted for already, if not, then will initialize it as the first count
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  //  using guard clauses, check if the value of counter1 matches with the counter2 key, if not will return false
  //  the second if statement will now check if the frequency2 key matches the value of the squared number in frequency1 (arr1)
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  console.log(true)
}
same2([2, 2, 3, 4], [4, 4, 9, 16])

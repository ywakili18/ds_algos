// How recursive functions work
// Invoke the same function with a different input until you reach your base case!

// Base Case is the condition when the recursion ends.

function countDown(num) {
  if (num <= 0) {
    console.log('done')
    return
  }
  console.log(num)
  num--
  countDown(num)
}
countDown(12)

// 1.) Store the first element as the smallest value you've seen so far.
// 2.) Compare this item to the next item in the array until you find a smaller number.
// 3.) If a smaller number is found, designate that smaller number to be the new "minimum" and continue to end of arr.
// 4.) If the new min is not the value (index) you initially began, swap the two values.
// 5.) Repeat this with next element until array is sorted.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // smallest value so far in array
    let min = i
    // compare to next index in array
    // j + 1 because depends on where i currently is.
    for (let j = i + 1; j < arr.length; j++) {
      // check for swap
      if (arr[j] < arr[min]) {
        min = j
      }
      // to reduce time complexity without looping everytime. (ex: [0,1,1,2,4,5])
      if (i !== min) {
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
      }
    }
  }
  console.log(arr)
}
selectionSort([1, 2, 3, 5, 3, 1, 32, 4])

// Time complexity is O(n^2) since it uses two for loops.
// In one scenario you would want to use selection sort is to reduce the number of swaps (writing to memory.)

// First part of quick-sort
// Pivot helper (also known as partition)
// the run time of quick sort depends in part on how one selects the pivot.
// Ideally, the pivot should be chosen so that it's roughly the median value
// in the data set you're sorting.
// For simplicity, we will always choose the pivot to be the first element in the array.

// psuedocode
// it will accept three arguments: arr, start index, end index (default to 0 and array.length - 1)
// grab the pivot from the start of the array
// store the current pivot index in a variable (this will keep track of where the pivot should end up)
// loop through the array from the start until the end
// if the pivot is greater then the current element, increment the pivot index variable
// and then swap the current element with the element at the pivot index
// Swap the starting element (i.e the pivot) with the pivot index
// return the pivot index
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
  }
  let swapIdx = start
  let pivot = arr[start]
  // loop over everything after start
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      //
      swapIdx++
      // start + 1 will increment 1 to the initial value. (i = 2 now)
      swap(arr, swapIdx, i)
    }
  }
  // perform final swap, with original starting point (pivot) and index where it needs to be swapped at.
  swap(arr, start, swapIdx)
  return swapIdx
}
// psuedocode for quicksort
// call the pivot helper on the array
// when pivot is returned with the updated index, recursively call the pivot
// helper on the subarray to the left an d right of that index.

// left is subarray starting index
// right is subarray end of index
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  // left and right is based on where the pivot index is at that point.
  // so as soon as it is equal, we are looking at one element, then recurisve call ends.
  // of one of the subarrays.
  if (left < right) {
    // returns pivot index
    let pivotIndex = pivot(arr, left, right)
    // recursively get the pivot point from the left sub array, until the pivotpoint index
    quickSort(arr, left, pivotIndex - 1)
    // recursively get the right subarray starting from the pivet point onwards
    quickSort(arr, pivotIndex + 1, right)
  }
  // return the sorted array.
  return arr
}
quickSort([4, 2, 1, 7, 6])
// time compleixty:
// best case is o(n log n)
// avg is o(n log n)
// worst is o(n^2) because we start at first element. if its sorted, we are comparing it to every item in the array.
// the decomposition now is getting single item arrays, moving everything to right subarray instead of left.
// o(n) decompoisitions * o(n) comparisons per decomposition

// space (log n), better the mergeSort

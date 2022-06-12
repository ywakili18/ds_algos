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
  // we need this pivot function, to return the index at where the pivot is located.
  // anything the pivot (or middle point) is where:
  // all values < pivot will be placed left of that pivot
  // all values > pivot will be placed right of that pivot
  function swap(arr, idx1, idx2) {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
  }
  // choose where the pivot starts first. it could be beginning, middle, or end of array.
  let pivot = arr[start]
  // we called swapIdx keeping track where the start index will be swapped with at the end of this function.
  // remember, we need all values less to be left of pivot, all values right to be right of pivot.
  let swapIdx = start
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      // increment to swapIdx, we need to return this later.
      swapIdx++
      // perform swap here, to push it left of the pivot.
      swap(arr, swapIdx, i)
    }
  }
  // we perform the final swap function again, because we will have the index at which the pivot (Start point)
  // The  swapIdx will have been incremented as above to switch with the pivot (start point) of the array.
  // As an example below: after performing the for loop above: we would have an array of [4,2,1,3,5,7,6,8]
  // since the swapIdx has been incremented above, we know where to switch arr[pivot] with arr[swapIdx] at now!
  // final array will now be [3, 2, 1, 4, 5, 7, 6, 8]
  swap(arr, start, swapIdx)
  console.log(arr)
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
  console.log(arr)
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

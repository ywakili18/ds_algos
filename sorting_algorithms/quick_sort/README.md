# What is quick sort

- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
- Works by selecting one element (called the pivot) and finding the index where the pivot should end up in the sorted array.
- Once the pivot is position appropriately, quick sort can be applied on either side of the pivot.

Look at the array below:
<code>[5,2,1,8,4,7,6,3]</code>

Let's say we pick the index[0] of that array above, which would be 5. We will then use that as a pivot point.

Meaning, **any value that is less than 5 will sort to the left side of the array and any value greater than 5 will sort to the ride side of that array.** Whatever the largest value that gets pushed to the left, (in our case 4) we will put 5 there, and set everything else to the right of it.

This is called recursively, by repeating the process of the left and right side of 5 until everything is sorted.

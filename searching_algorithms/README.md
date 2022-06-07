# Intro to searching algorithms

## Linear Search

- Imagine a big array that contains a bunch of states.

<code>let state = [ "AK - Alaska",
"AL - Alabama",
"AR - Arkansas",
"AS - American Samoa",
"AZ - Arizona",
"CA - California",
"CO - Colorado",
"CT - Connecticut",
"DC - District of Columbia",
"DE - Delaware",
"FL - Florida",
"GA - Georgia",
"GU - Guam",
"HI - Hawaii",
"IA - Iowa",
"ID - Idaho",
"IL - Illinois",
"IN - Indiana",
"KS - Kansas",
"KY - Kentucky",
"LA - Louisiana",
"MA - Massachusetts",
"MD - Maryland",
"ME - Maine",
"MI - Michigan",
"MN - Minnesota",
"MO - Missouri",
"MS - Mississippi",
"MT - Montana",
"NC - North Carolina",
"ND - North Dakota",
"NE - Nebraska",
"NH - New Hampshire",
"NJ - New Jersey",
"NM - New Mexico",
"NV - Nevada",
"NY - New York",
"OH - Ohio",
"OK - Oklahoma",
"OR - Oregon",
"PA - Pennsylvania",
"PR - Puerto Rico",
"RI - Rhode Island",
"SC - South Carolina",
"SD - South Dakota",
"TN - Tennessee",
"TX - Texas",
"UT - Utah",
"VA - Virginia",
"VI - Virgin Islands",
"VT - Vermont",
"WA - Washington",
"WI - Wisconsin",
"WV - West Virginia",
"WY - Wyoming"]
</code>

- One way is to check if a state exists in that array is to check each index in the array in a linear fashion and return the first value. (You could use a for loops)
- This is called a **Linear Search**
- Array built in javascript methods such as indexOf, includes, find, findIndex are essentially doing a linear search algorithm
- You could start at the begining or the end of the array, checking each value.

## What is the BIG O?

It is O(N), linear time since it is dependent of the number if inputs in that array.

## Binary Search

- **Binary Search** is a faster for of a search algorithm
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
- Binary search only works on sorted arrays.
- The idea is to divide and conquer. Keep checking at a halfway point to see if that index exists in an array (< or >) and keep dividing until you can find that value if it exists. In other words, check the left and right side until value is found.

### Big O of Binary Search

- Worst is O(log n), Best is O(1) linear time.

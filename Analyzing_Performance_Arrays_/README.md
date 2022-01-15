# The Big O of Objects

## When to use objects?

- When you don't need order
- When you need fast access/insertion and removal

## Big O of Objects is as follows

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(1)

Example:

      let instructor = {
        firstName:"Kelly",
        isInstructor: true,
        favoriteNumbers:[1,2,3,4]
      }

\*Side note\*
Later on, hash maps is a data structure which are used which will explain how objects work.

When we are describing searching, is a linear time. It is not looking for a key (accessing) such as favoriteNumbers. Rather, it is checking to see if a given piece of information exists: the value (the right side of the key)

## Big O of Object Methods

- Object.keys - O(n) (returns array of keys in object)
- Object.values - O(n) (returns array of values in object)
- Object.entries - O(n) (returns an array of key:value pairs of object)
- hasOwnProperty - O(1) (returns boolean whether object has the specified property or not.)

hasOwnProperty has a O(1) time because we are accessing the keyname, and being able to check if key exists. It's a simple "Access" method.

# What about Arrays? When are they slow?


## When do we use arrays?

- When you need order
- When you need fast access/insertion and removal (depending on the situation)

## Big O of Arrays

- Insertion, Removal - not specific, dependent of situation.
- Searching - O(N)
- Access - O(1)

### Why is accessing a value in an array a constant time?

Example: 
    
      let names = ["Mike", "Cindy", "John]

- If we want to access "Mike", we would simply call names[0]. Since the input is specific, accessing the value mike in the array names would make it constant.

- A common misconception is that JavaScript will go through check every value in an array before it gets to its value. That is not the case, since accessing a value in an array is instant. 

### What about Insertion and Removal?

- Each element has an index that corresponds to its value. If we try to push() (or pop()) a value, say "Jack" to the end, it is a constant time. You can add to the end of an array, doesn't need much computing time. 

- Inserting at the *beginning of an array* is a different story. This is because every value in an array has its own index. So if we insert a value at the beginning on an array (such as unShift()), JS will need to reassign each index to every value in that array. This now makes the Big O a O(n) (linear time). So imagine an array with *thousands* of values, and imagine its computing time. 

In simple terms:

- push() and pop(): O(1) or constant  time.
- unShift() and Shift() or linear time. 

---

# Big O of Array Methods (well rest of them)

- concat - O(n)
- slice - O(n)
- splice - O(n)
- sort - O(n * log N)
- Higher order functions (forEach/map/reduce/filter/etc) - O(n)

Sort method can be complex because it takes a larger time to sort. We have to compare, move things around in that array. Its complicated. This is the slowest Big O time by far of all the array methods.

Higher order functions is dependent on the size of the array and maybe conditionals
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
Later on, hash maps is a data structure are used which will explain how objects work.

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

# What is Big O Notation and why do we need it?

## The need for Big O Notation

---

- In the world of computer science, there are many ways to solve a programming problem. We can use many different methods to solve a problem: for-loops, array methods, built in javascript methods.

- Big O helps us calculate the **time and space complexity**

- In simple terms, it helps us analyze the performance of our code.

## How do we look at a solution and find its performance time (Timing our Code)?

---

Let's take a look at the following example:

We want a function that will calculate the sum of all numbers starting at 1 up to n.

### Solution 1:

        function addUpTo(num){
          let total = 0;
          for (let i=1; i<=num; i++){
            total += i;
          }
        return total;
        }

### Solution 2:

    function addUpTo(num){
      return n * (n+1) /2
    }

What's the difference? Both solutions solve the same problem, but it's timing is different.

What is better?

- Is it faster?
- Is it memory management?
- Readbility?

It's situation dependent, but its typically speed. (For this example we will look at speed only)

Timing functions are built in javascript methods that can help us gage run time with our solutions

      let t1 = performance.now();
      addUpTo(1000000)
      let t2 = performance.now();
      console.log(t2-t1/1000, ' seconds')

If you were to test both solutions, you'll find the solution 1 will be much slower then solution 2.

However, this process can be tedious.

## The problem with time

---

- Different machines will run different times (due to cpu, gpu speed).
- The same machine will also record different times!
- And for fast algorithms, speed measurements may not be enough.

## Counting Operations

---

If we are not using time, what is a visual way we can determine a solutions Big O?

One way is to count the **amount of operations**

Solution 2, will have three operators:

    function addUpTo(num){
      return n * (n+1) /2
    }

- Multiplication
- Addition
- Division

Even if the number is 1,000,000, it will still have three operations, helping with performance time.

Solution 1 on the other hand:

        function addUpTo(num){
          let total = 0;
          for (let i=1; i<=num; i++){
            total += i;
          }
        return total;
        }

- First we are in a loop (total+=i), if n is 1, it will be 1 addition operation. If n is 1000, it will be 1000 addition operations.

- Second, we are assigning i++ with n additions, and n assignments.

- The total will happen once, since it is not in a loop.

- Oh.... and in the loop we are assigning an equal to 1, comparisons to n...

There is not a concrete way to describe this solution's time. However, finding this out isn't really what we want, its the **trend** that we are looking for.

# Now, we are introducing Big O.

In simple terms of Big O Time:
(side node, f(n) stands for function with input of n, and the equal sign after stands for runtime.)

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different.

When n(the input) grows what will the time be? Will it be constant? Will it be linear?

As an example:

- Solution 2 has a trend or Big O of O(1) (constant)
- Solution 1 has a trend of Big O of n (meaning its bounded by n, say 100n)

Let's look at a nested loop:

    const printAllPairs = (n) => {
      for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
          console.log(i,j)
          <!-- Will print (0,0), (1,1), etc -->
        }
      }
    }

Well we know that the both loops individually have a Big O of O(n). However, in this solution to the function it does not mean that it is a O(n), but rather O(n \* n) or O(n^2), meaning its quadratic.

This means as N grows, the run time will increase _*substantially*!_

## Simplifying Big O Expressions

Constants don't matter:

- O(2n) = O(n) (based on how many "n" or inputs)
- O(500) = O(1) (we know the exact amount of operations, therefore its constant)
- O(13n^2) = O(n^2) (like a nested loop with many operations based on n inputs)

Smaller terms don't matter:

- O(n+10) = O(n)
- O(1000n + 50) = O(n)
- O(n^2 + 5n + 8) = O(n^2) (because 5n + 8 is meaningless compared to n^2)

Big O Shorthands:

- Arithmetic operations & Variable assignements are constant.
- Accessing elements in an array (by index) or object (by key) is constant.
- In a loop, the complexity is the length of the loop \* the complexity of whatever happens inside the loop. (could be linear or quadratic, depends if anything is nested or not (quadtratic) or as n grows, will be linear.)

### Quick Summary:

- O(1) is fantastic runtime, but maybe difficult to implement (especially with complicated algos)
- O(n^2) is a slow run time, and very bad for performance

## Space Complexity

---

So the focus has been on **time complexity**, now we can use big O to analyze the space complexity.

In simple terms, we want to check how much additional memory we need to allocate in order to run our code.

The technical term is Auxilary Space Complexity

## Rules of Thumb

- Most primitives are constant space.
- Strings require O(n) space (n is string length)
- Reference types (arrays, objects) are generaly O(n) where n is the length for arrays, or the number of keys for objects.

An example:

      const sum = (arr) => {
        let total = 0;
        for (let i=0; i<arr.length; i++){
          total += arr[i];
        }
        return total
      }

We have one variable called total. We have a second declaration inside the for loop "i". Thus, we only assign two values to those variables, making this a big O of O(1) constant space.

Example 2:

    const double = (arr) => {
      let newArr = [];
      for (let i=0; i<arr.length; i++){
        newArr.push(2 * arr[i])
      }
      return newArr;
    }

As the array length grows, since we are pushing in arr[i] into the new array, it will have a O(n) space since it will depend on "n" or inputs.

## Logarithms & Recap

The most common Big O complexities are O(1), O(n), O(n^2)

In Math Logarithms is the inverse of exponentation.

log2(8) = 3

Meaning 2^3 = 8.

We can shorten this to Big O of Log or O(log)

Log time is actually great for performance, second only to constant time (O(1))

### Why is this important?

- Certain Searching Algos
- Sorting algos
- Recursion

have log time/space complexity.

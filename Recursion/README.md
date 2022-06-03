# Why Use Recursion?

## What is recursion?

- A **process** (a function in our case) that calls itself.
- Recursion is used everywhere!
- JSON.parse/JSON.stringify is an example of Recursion (often at least)

## The Call Stack

- In almost all programming languages, there is a built in data structure that manages what happens when functions are invoked.
- In JavaScript its called **The call stack**
- The call stack: it's a stack data structure.
- Any time a function is invoked it is placed (**pushed**) on top of the call stack.
- When JavaScript sees the **return** keyword or when the function ends, the compiler will remove (**pop**)

## Common Recursion Pitfalls

- When there is no base case, it will loop over and over, thus exceeding the call stack size.
- Forgetting to return or not returning anything at all. console.log is not an effective way of debugging recursive functions since it will not return out of the recursive function. Return after to end function after logging statement.

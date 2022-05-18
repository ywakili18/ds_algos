# Problem Solving Approach

## Introduction to Problem Solving

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
5. How should I label the important peices of data that are part of the problem?

## Concrete example:

      Write a function which takes in a string and returns countss of each character in the string

      charCount('aaaa') // output: {a:4}

Straight forwards, but what if we want the count of **every** character? such as {a:4, b:0, c:0} and so forth. These are questions to ask in an interview setting.

Another example:

    Imagine the same function takes an input of "My phone number is 111-111-1111"

Do we count for spaces, what about other characters such as numbers, signs, etc?

    "Hello hi"

Do we ignore casing? Do we count for lowercase or capitalcase letters?

It helps us understand what the question asks before we tackle the solution.

What if someone passes:
charCount("")

Now we have to check for invalid inputs.

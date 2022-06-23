# What is a stack?

- An abstract data structure.
- A **lifo** data structure!
- The last element added to the stack will be the first element removed from the stack.
  -Think dirty dishes (the last plate is added on top, but the first one will be cleaned and removed)
- Also think of the callstack when it comes to functions in javascript. Last function is added to the stack, then removed when the function is called and returns.

## When are stacks used?

- Managing function invocations.
- Undo/Redoing (think photoshop)
- Routing (this history object in react) is treated like a stack.

## Big O of Stacks:

- Insertion - Constant
- Removal - Constant
<!-- have to iterate below -->
- Searching - Linear
- Access - Linear

# What are queues

- Similiar to stacks, its a **FIFO** data structure!
- First in, first out.
- Think about how you waited in line
- Background tasks
- Uploading resoruces
- Printing/Task processing (if many people are printing at once)

BIG OF OF QUEUES

- Insertion - Constant
- Removal - Constant
- Searching - Linear
- Access - Linear

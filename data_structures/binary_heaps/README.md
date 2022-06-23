# What is a binary heap?

- Very similar to a binary search tree, with different rules.
- In a **Max Binary Heap** - parent nodes are always larger than child nodes.
- In a **Min Binary Heap** - parent nodes are always smaller than child nodes.
- The difference is that in a binary search tree, all smaller nodes will be sorted to the left side of the tree from the root node and all bigger nodes would be sorted to the right side of the root node. In a binary heap however, order doesn't matter BUT the values must be either smaller (max heap) than the parent node or bigger (min heap) than the parent node.
- Binary heaps are used to implement Priority Queues, which are very commonly used data structures.
- They are used with graph traversal algorithms.

# What is a priority queue?

- A data structure where each element has priorty. Elements with higher priorties are served before elements with lower priorities.
- It is an abstract data structure, with many ways to implement one.

# Big o of binary heaps

- insertion - o (log n)
- removal - o (log n)
- search o(n)

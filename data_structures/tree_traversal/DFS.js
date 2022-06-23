class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
class BST {
  constructor() {
    this.root = null
  }

  insert(val) {
    let newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        // implement check if node is equal to one.
        // many other ways to solve this issue.
        if (val === current.val) {
          return undefined
        }
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode
            return this
          }
          current = current.left
        } else {
          if (current.right === null) {
            current.right = newNode
            return this
          }
          current = current.right
        }
      }
    }
  }
  //  **FIND METHOD**
  // We can use recursion to traverse the binary tree and compare the value
  recursiveFind(val, node = this.root) {
    if (!node) return false
    if (val === node.val) return true
    // check left side of the root recursively
    if (val < node.val) return this.recursiveFind(val, node.left)
    // check left side of the root recursively
    if (val > node.val) return this.recursiveFind(val, node.right)
  }
  // DFS
  // Return the array of values
  // Pre order is to visit the node first, then left, then right.

  // [ 10, 6, 3, 8, 15, 20 ]
  DFSPreOrder() {
    let data = []
    function traverse(node) {
      data.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
  // Post order is to traverse the entire tree, then the node, left, and right.
  // [ 3, 8, 6, 20, 15, 10 ]
  DFSPostOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.val)
    }
    traverse(this.root)
    return data
  }
  // In order
  DFSInOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}
let first = new BST()
first.insert(10)
first.insert(6)
first.insert(15)
first.insert(3)
first.insert(8)
first.insert(20)
console.log(first.DFSPreOrder())

// in ORDER could be useful to return sorted trees
// Pre order could be useful to duplicate trees, or flatten and store it somewhere.

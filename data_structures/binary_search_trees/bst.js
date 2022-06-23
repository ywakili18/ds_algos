// Node class
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
  // **INSERTION METHOD**
  // Create a new node
  // Starting at the root:
  // Check if there is a root, if not - the root now becomes that new node.
  // If there is a root, check if the value of the new node is greater than or less than the value of the root.
  // If it is greater:
  // - Check to see there is a node to the right
  // -- If there is, move that node and repeat these steps.
  // -- If there is not, add that node as the right property.
  // If it is less:
  // Check to see if there is a node to the left
  // If there is, move to that node and repeat these steps.
  // If there is not, add that node as the left property.

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
}
let first = new BST()

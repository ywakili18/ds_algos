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
  // Breadth first search to visit every node on the same level before
  // looking at the child
  // Steps:
  // - Create a queue (this can be an array) and a variable to store the values of nodes visited.
  // - Place the roote node in the queue.
  // - Loop as long as there is anything in the queue
  // - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
  // - If there is a left property on the node dequeued - add it to the queue
  // - If there is a right property on the node dequeued - add it to the queue
  BFS() {
    let node = this.root
    let data = []
    let queue = []
    queue.push(node)

    while (queue.length) {
      // .shift() would mutate the original array.
      node = queue.shift()
      data.push(node.val)
      // check left
      if (node.left) queue.push(node.left)
      // chec right
      if (node.right) queue.push(node.right)
    }
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
console.log(first.BFS())

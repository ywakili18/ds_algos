// Pushing Psuedocode
// The function should accept a value
// Create a new node with that value
// If there are no nodes in the stack, set the first and last property to be the newly created node.
// If there is at least one node, create a variable that stores the current first property on the stack.
// Reset the first property to be the newly created node.
// Set the next property on the node to be the previously created variable.
// Increment the size of the stack by 1
// REMEMBER: LAST IN, FIRST OUT.

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return this.size++
  }
  pop() {
    if (!this.first) {
      return null
    }
    let temp = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
    }
    this.size--
    return temp
  }
}
let first = new Stack()
first.push('1')
first.push('1')
console.log(first)

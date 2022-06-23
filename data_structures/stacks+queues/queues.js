// Traditionally, in an array or linkedlist, we would push to the end of the ds and remove from the beginning using shift.
// In a queue, it is called Enqueue and Dequeue
// Its faster to add to the tail and remove from the head.

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  // create a new node using that value passed to the function
  // if there are no nodes in the queue, set this node to be the first and last property of the queue
  // otherwise, set the next property on the current last to be that node, and then set
  // the last property of the queue to be that node.
  // increment size by 1
  enqueue(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return this.size++
  }
  // If there is no first property, return null
  // Store the first property in a variable
  // See if the first is the same as the last, if so, set the first and last to be null
  // If there is more than one node, set the first property to be the next property of first.
  // this.size --
  // Return the value being dequeued
  dequeue() {
    if (!this.first) {
      return null
    }
    let temp = this.first
    if (this.first === this.last) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
    }
    this.size--
    return temp.value
  }
}
let first = new Queue()
first.enqueue(1)
first.enqueue(2)
first.enqueue(3)
first.dequeue()
console.log(first)

// Node just stores a piece of data - val
// reference to next node - next
class Node {
  // val is whatever piece of information is
  constructor(val) {
    this.val = val
    // at the beginning, there is nothing that comes after this node.
    this.next = null
  }
}

class SinglyLinkedlist {
  constructor() {
    // define a pointer to the head and tail of the list
    this.head = null
    this.tail = null
    // define the length of the list.
    this.length = 0
  }
  // ** PUSH METHOD FOR SINGLY LINKED LIST **
  // adding a node to the end of the linked list
  // add push method for linked list
  // pseudocode for push instance method
  // this function should accept a value
  // create a new node using the value passed to the function
  // If there is no head property on the list, set the head and tail to be the newly created node.
  // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
  // Increment length by one
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      // if nothing, returns head is now new node, and the tail is also the new node as well. (0)
      this.head = newNode
      this.tail = this.head
    } else {
      // this defines the new node in a singly linked list.
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  // **  END OF PUSH METHOD **

  // ** POP METHOD FOR SINGLY LINKED LIST **
  // Removing a node from the end of the linkedlist.
  // There is no nodes in the list, return undefined
  // Loop through the list until you reach the tail
  // Set the next property of the 2nd to the last node, next to null
  // Decrement the length of the list by 1
  // Return the value of the node removed.
  pop() {
    // checks if there is a current head in the singly linkedList
    if (!this.head) return undefined
    // we store where the end of the linked list is starting at the head, defined by current
    let currentNode = this.head
    // the new tail, of what the list is going to become.
    let secondToLastNode = this.head
    while (currentNode.next) {
      secondToLastNode = currentNode
      currentNode = currentNode.next
    }
    this.tail = secondToLastNode
    secondToLastNode.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return currentNode
  }

  // ** SHIFT METHOD FOR SINGLY LINKED LIST **
  // Removing a new node from the beginning of the Linked List
  // If there are no nodes, return undefined
  // Store the current head property in a variable
  // Set the head property to be the current head's next property
  // Decrement the length by 1
  // Return the value of the node removed
  shift() {
    if (!this.head) return undefined
    let startingHead = this.head
    this.head = startingHead.next
    this.length--
    return startingHead
  }
  // ** SHIFT METHOD FOR SINGLY LINKED LIST **
  // Adding a new node to the beginning of the link list.
  // Should accept a value
  // Create a new node using the value passed to the function
  // If there is no head property on the list, set the head and tail to be the newly created node
  // Otherwise set the newly created node's next property to be the current head property on the list
  // Set the head property on the list to be that newly created node.
  // length ++
  // Return the linkedList
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
}
// let first = new SinglyLinkedlist()
// first.push('john')
// first.push('john2')
// first.push('john3')
// // first.unshift('NEWJOHN')
// // first.shift()
// console.log(first.tail)

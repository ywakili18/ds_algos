class Node {
  constructor(val) {
    this.val = val
    this.next = null
    // only difference between singly linked lists
    this.prev = null
  }
}
// same as linkedlists
class DoublyLinkedLists {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  // **PUSH METHOD**
  // Adding a node to the end of the doubly linked list
  // Create a new node with the value passed to the function
  // If the head property is null, set the head and tail to be the newly created node
  // If not, set the next property on the newly created node to be the tail
  // Set the tail to be the newly created node.
  // Increment length++
  // return this (the linkedlist)
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  // **POP METHOD**
  // Removing a node from the end of the Doubly Linked List
  // If there is no head, return undefined
  // Store the current tail in a variable to return later
  // If the length is 1, set the head and tail to be null
  // Update the tail to be the previous node
  // Set the newTail's next property to null
  // Decrement the length
  // Return the value removed
  pop() {
    if (!this.head) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      // Need to sever the OLD link that was sorted from this.tail.
      // The prev node was the tail, which .next property was null (since it is at end of linkedlist)
      // Thus, only thing we need to sever is the prev node originally connected with the prev node.
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  // **SHIFT METHOD**
  // Removing a node from the beginning of an array
  // If the length is 0 return undefined
  // Store the current head property in a variable (called old head)
  // If the length === 1 set head to be null, tail to be null
  // Update the head to be next of the old head
  // Set the old head's next to null
  // Decrement the length
  // return  old head

  shift() {
    if (this.length === 0) return undefined
    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      // since the new head.prev was old head, sever link with old head
      this.head.prev = null
      // sever link from oldhead.next property, when we return value below
      oldHead.next = null
    }
    this.length--
    return oldHead
  }

  // **UNSHIFT METHOD**
  // Adding a node to the beginning of an array
  // Create a new node with a value passed to the function
  // If the length is 0, set the head and tail to be the new node
  // Otherwise set the prev on the head to be the new node
  // Set the next property on the new node to be the head property
  // Update the head to be the new node
  // Increment the length
  // Return the list

  unshift(val) {
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  // **GET METHOD**
  // Retrieving a node by it's position in the Linked List
  // If the index is < 0 or >= this.length return null
  // If the index <= 1/2 length of the list
  // Loop through the list starting from the head and loop towards the middle
  // Return the node once its found
  // If the index is greater than half the length of the list
  // Loop through the list starting from the tail and loop towards the middle
  // return the node once its found

  get(index) {
    if (index < 0 || index >= this.length) return null
    let count
    let current
    // an optimized solution to find the index
    // similiar to binary search
    // instead of itearting through the entire linked list, we can compare it to the middle index

    // Would count upwards if less the middle
    if (index <= this.length / 2) {
      count = 0
      current = this.head
      while (count !== index) {
        current = current.next
        count++
      }
      // Would count upwards if greater the middle
    } else {
      count = this.length - 1
      current = this.tail
      while (count !== index) {
        current = current.prev
        count--
      }
    }
    // node that gets returned
    return current
  }
  // **SET METHOD**
  // Replacing the value of a node in the double linked list
  // Create a variable which the results of the get method at the index passed to the function
  // If the get method returns a valid node, set the value of that node to be the value passed to the function
  // return true
  // otherwise, return false
  set(index, val) {
    let result = this.get(index)
    if (result) {
      result.val = val
      return true
    }
    return false
  }
  // **INSERT METHOD**
  // Adding a node to the linked list at a specific position
  // If the index < 0 >= length return false
  // If the index is 0, unshift
  // If the index is the same as the length, push
  // Use the get method to access the index-1
  // Set the next and prev properties on the correct nodes to link everything together
  // Increment the length
  // Return true
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    // **NOTE** The !! is a double not operator. Instead of putting "return true" inside the block of code
    // we can use !! as a short hand way of storing a truthy value inside of the above values
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    let newNode = new Node(val)
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next

    // Assigning the next node to be the newNode before where the newNode is at
    beforeNode.next = newNode
    // Assigning prev node of the newNode to be before where the newNode is at
    newNode.prev = beforeNode
    // Assigning the newNode.next link to be the node after where the newNode is at
    newNode.next = afterNode
    // Assining the afterNode.prev to be the newNode
    afterNode.prev = newNode

    this.length++
    return true
  }
  // **REMOVE METHOD**
  // Remove a node from the linked list at a specific position/index
  // If the index is < 0 or greater than or equal to the length, return undefined
  // If the index is 0, shift
  // If the index === this.length-1, pop
  // Use get method to retrieve the item to be removed
  // Update the next and prev properties to remove the found node from the list
  // Set the next and prev to null on the found node
  // Decrement the length
  // Return the removed node
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    let removedNode = this.get(index)
    let beforeNode = removedNode.prev
    let afterNode = removedNode.next

    beforeNode.next = afterNode
    afterNode.prev = beforeNode
    removedNode.next = null
    removedNode.prev = null
    this.length--
    return removedNode
  }
}
// ** BIG O OF LINKEDLIST **
// INSERTION - O(1)

// REMOVAL - It depends either O(1) or O(N)
// Faster since we have .prev property

// SEARCHING - O(N)
// Depends on the length of the list, would have to check every node, slightly faster then single
// using divide and conquer algorithm

// ACCESS - O(N)
// Depends on the length of the list, would have to check every node

// When to use them vs arrays?
// When inserting and deleting are frequently required.
// Arrays contain build indexes whereas LinkedLists do not.

// LinkedLists are the pre-reqs for Stacks and Queues
// Space is O(N)
let first = new DoublyLinkedLists()
first.push('first')
first.push('second')
first.push('third')
first.push('fourth')
first.push('sixth')
first.remove(4)
console.log(first)

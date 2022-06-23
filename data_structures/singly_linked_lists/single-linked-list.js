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
  // ** UNSHIFT METHOD FOR SINGLY LINKED LIST **
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
  // ** GET METHOD FOR SINGLY LINKED LIST **
  // Retrieving a node by it's position in the Linked List
  // Similiar to an array, it will get use the node based on the "index". But we have to start at the head onwards, until we get there
  // looping through
  // The funciton should accept an index
  // If the index is < 0 or >= this.length return null
  // Loop through the list until you reach the index and return the node at that specific index.
  get(index) {
    if (index < 0 || index >= this.length) return null
    let counter = 0
    let current = this.head
    while (counter !== index) {
      // so if the counter starts at 0, but we get the "index" of 2, we need to count++ until we get to the coutner at 2
      // we then assign current as the next value in the linked list, so if the count reaches the index, we can return the index as such
      current = current.next
      counter++
    }
    return current
  }
  // ** SET METHOD FOR SINGLY LINKED LIST **
  // Changing the value of a node based on its position in the Linked List
  // This function should accept a val, and index
  // Use get function to find specific node
  // If the node is not found return false
  // If the node is found, set the value of that node to be the value passed to the function and return true
  set(index, val) {
    // using get method from earlier to grab value
    let foundNode = this.get(index)
    if (foundNode) {
      // updaing value
      foundNode.val = val
      // used for debugging purposes
      return true
    }
    // used for debugging purposes
    return false
  }
  // ** INSERT METHOD FOR SINGLY LINKED LIST **
  // Adding a node to the Linked List at a specific position
  // If the index is < 0 or > the length, return false
  // if the index is the same as the length, push a new node to the end of the list
  // If the index is 0, unshift a new node to the start of the list
  // Otherwise using the get method, access thoe node at the index - 1
  // Set the next property on that node to be the new node
  // Set the next property on the new node to be the previous next
  // Increment the length
  // return true
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    // would push value at the end of the linkedlist
    if (index === this.length) return !!this.push(val)
    // if it we choose the value at 0, would then insert at the beginning of the linkedlist
    if (index === 0) return !!this.unshift(val)
    // **NOTE** The !! is a double not operator. Instead of putting "return true" inside the block of code
    // we can use !! as a short hand way of storing a truthy value inside of the above values

    // to find the index using get method right before the index. if the index is somwhere in the middle of list
    // we need to connect (at where the index is being asked for) from the previous index to the new node
    // and the new node to where to current node is at the index
    let newNode = new Node(val)
    let prev = this.get(index - 1)
    // we use temp variable so we dont lose the original value of where .next was on the previous node
    // not losing the connection
    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }
  // ** REMOVE METHOD FOR SINGLY LINKED LIST **
  // Remove a node from the linked list at a specific position/index

  // If the index is < 0 || > this.length return undefined
  // If the index === this.length - 1, pop
  // If the index is 0, use shift method
  // Otherwise use the get method, access the node at the index - 1
  // Set the next property on that node to be the next of the next node.
  // decrement the length
  // return the value of the node removed
  remove(index) {
    if (index < 0 || index > this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) this.pop()
    let prev = this.get(index - 1)
    let removed = prev.next
    prev.next = removed.next
    this.length--
    return removed
  }
  // ** REMOVE METHOD FOR SINGLY LINKED LIST **
  // Reversing the Linked List in place
  reverse() {
    // swap head and the tail
    // we store this.head in node, to swap with the tail, since this.head will change to this.tail
    // (0) -> (1) -> (2)
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    // prev MUST BE NULL so tail doesnt get undefined or anything else
    let prev = null
    // the loop will take place to take care of the next properties of the reverse singly linked list
    for (let i = 0; i < this.length; i++) {
      // whatever the node is, the next variable will be stored
      next = node.next
      // we store the original value of nodes.next into prev, which will initially start at null
      node.next = prev
      // the prev will define as the current node
      prev = node
      // then the node is now at then next value
      node = next
    }
    return this
  }
}

// ** BIG O OF LINKEDLIST **
// INSERTION - O(1)

// REMOVAL - It depends either O(1) or O(N)
// It could be linear time because if removing an item at the end of the linkedlist
// would require you find where the node before the end is. And that depends on the size
// of the linkedlist

// SEARCHING - O(N)
// Depends on the length of the list, would have to check every node

// ACCESS - O(N)
// Depends on the length of the list, would have to check every node

// When to use them vs arrays?
// When inserting and deleting are frequently required.
// Arrays contain build indexes whereas LinkedLists do not.

// LinkedLists are the pre-reqs for Stacks and Queues
// Space is O(N)
let first = new SinglyLinkedlist()
first.push('john')
first.push('john2')
first.push('john3')
first.reverse()
console.log(first)

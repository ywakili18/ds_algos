class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
  // bubble up is used to compare each new element with its corresponding parent node.
  // if it needs to be the largest element in the binary heap.
  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    // cant make index indx at 0, will return negative value
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element <= parent) {
        break
      } else {
        // parent value swaps with bigger child starting element and onwards
        this.values[parentIdx] = element
        // child value swaps with smaller parent
        this.values[idx] = parent
        // update the original indx with old parent Idx
        idx = parentIdx
      }
    }
  }
  // REMOVING FROM A HEAP
  // Usually means to remove from the maximum or min value
  // Involves removing the root
  // Replace with the most recently added
  // Adjust (sink down)
  extractMax() {
    // get the first element/root in binary heap which would be current max value
    const max = this.values[0]
    // pop last item off
    const end = this.values.pop()
    // to start sink down process to get new largest value to top of binary heap.
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }
  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        // to compare the right with the original element AND the leftchild
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx
        }
      }

      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = idx = swap
    }
  }
}
let heap = new MaxBinaryHeap()
// heap.insert(49)
// heap.insert(39)
// heap.insert(33)
// heap.insert(18)
// heap.insert(27)
// heap.insert(12)
// heap.insert(55)
// heap.insert(20000)
// console.log(heap)

function factorial(num) {
  if (num === 1) {
    // because 1 * 1 = 1; then return will end the call stack and thus the recursive function!
    return 1
  }
  return num * factorial(num - 1)
}
factorial(3)

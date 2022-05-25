function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  //  create two objects that will check if the count of a char in str
  // exists, and if so store that count in that object.
  // then we will check the key both objects to see if it matches
  // if so, return true

  if (str1.length != str2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

validAnagram('aaa', 'aaa')

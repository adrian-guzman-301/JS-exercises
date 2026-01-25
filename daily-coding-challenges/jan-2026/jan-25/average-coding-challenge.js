/*
1. define "isAvgWhole" function
2. 1 parameter: an array of whole numbers
3. make a variable out of how many numbers are in array
4. make a variable out of the sum of all elements in array
5. make a variable out of dividing step 4 var by step 3 var
6. if step 5 result = whole number, return true
7. else return false
*/

function isAvgWhole(array) {
  let numberCount = array.length
  let arraySum = array.reduce((a, b) => a + b, 0)
  let average = arraySum / numberCount
  if(Number.isInteger(average)) {
    return true
  } else {
    return false
  }
}
console.log(isAvgWhole([1, 3]))// ➞ true
console.log(isAvgWhole([1, 2, 3, 4]))// ➞ false
console.log(isAvgWhole([1, 5, 6]))// ➞ true
console.log(isAvgWhole([1, 1, 1]))// ➞ true
console.log(isAvgWhole([9, 2, 2, 5]))// ➞ false
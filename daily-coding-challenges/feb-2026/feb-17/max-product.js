/*
a. function has 1 parameter: an array of numbers
b. function returns the maximum product obtained from multiplying 2 adjacent numbers in array
c. example: [1,2,3,4,5] --> 20; [5, 1, 2] --> 5
d. pseudocode:
  1. find out how to get the two highest adjacent numbers
  2. once figured out, multiply them
  3. return product
*/

function adjacentElementsProduct(array) {
  let newArr = []
  for(i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1])
  }  
  return Math.max(...newArr)
}

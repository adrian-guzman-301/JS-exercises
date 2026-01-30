/*

Write a function that takes an array as input and returns a new array with the elements in reverse order. You must use both push and pop methods to achieve this.

*/
/**
 1. declare/initialize variable
 2. variable is blank
 3. for loop
  a. initialize index
  b. start at end of index for reverse order
    i. array.length - 1
  c. if i >= 0, continue
  d. decrement by 1: i--
  e. blank variable result[result.length] = arr[i];
  f. close curly brace
 4. return blank variable
 5. close function
 */
// function reverseArray(arr) {
//   const result = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     result[result.length] = arr[i];
//   }

//   return result;
// }
/////////////////////////////
/**
1. create function "reverseArray"
2. 1 parameter: an array
3. create new variable: const newArr = []
4. forEach(arr.pop(), newArr.push())
5. return newArr
 */
function reverseArray(arr) {
  const newArr = []
  const copyArr = arr
  arr.forEach(item => {
    copyArr.pop(item)
    newArr.push(item)
  })
  return newArr
}
console.log(reverseArray([1,2,3,4,5]))



/*

Write a function that takes an array of numbers and a number n as input. The function should return a new array where the first n elements are moved to the end of the array. You must use both shift and push methods to achieve this.

*/
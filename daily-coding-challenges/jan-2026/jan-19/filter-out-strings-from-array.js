/* pseudo-code
1. define "filterArray" function with 1 parameter:
  a. an array of non-negative integers and strings
2. filter out all strings
3. return step 2 results in a new array
*/

function filterArray(arr) {
  return arr.filter(item => typeof item === 'number')
}

console.log(filterArray([1, 2, "a", "b"]))
console.log(filterArray([1, "a", "b", 0, 15]))
console.log(filterArray([1, 2, "aasf", "1", "123", 123]))
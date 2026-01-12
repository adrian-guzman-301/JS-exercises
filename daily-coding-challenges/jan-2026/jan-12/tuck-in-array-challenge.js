/*pseudo-code

parameters: 2 arrays 
return: 2nd array inserted in the middle of first array
examples:
  tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
  tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
notes:
  1. 1st array always has 2 elements
  2. use spread syntax to solve this challenge
steps to solve:
  1. define "tuckIn" function with 2 parameters
  2. pass through the first item in the first parameter
    a. as there are only 2 at all times: make sure one is passed,
    b. then instert the second array
  3. return result
*/

function tuckIn(arr1, arr2) {
  return [arr1[0], ...arr2, arr1[1]]
}

console.log(tuckIn([1, 10], [2,3,4,5,6,7,8,9]))
console.log(tuckIn([15, 150], [45, 75, 35]))
console.log(tuckIn([[1,2], [5,6]], [[3, 4]]))
/*pseudo-code
parameters: an array of any number of type bool items
returns:
  1. the number of true values
  2. 0 if all false values
  3. 0 if given an empty array
examples:
  countTrue([true, false, false, true, false]) ➞ 2
  countTrue([false, false, false, false]) ➞ 0
  countTrue([]) ➞ 0
steps to solve:
  1. declare "countTrue" function with one parameter, "arr"
  2. if there are no detected true values, return 0
  3. else return the number of true values
*/

function countTrue(arr) {
  let trueCount = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === true) {
      trueCount++
    }
  }
  return trueCount
}

console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))
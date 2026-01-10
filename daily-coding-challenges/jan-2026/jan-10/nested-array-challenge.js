/*pseudo-code
parameters: 2 arrays
returns: Boolean
conditions for true: arr1's min value > arr2 min value && arr1 max < arr2 max
examples: 
  canNest([1, 2, 3, 4], [0, 6]) ➞ true
  canNest([3, 1], [4, 0]) ➞ true
  canNest([9, 9, 8], [8, 9]) ➞ false
  canNest([1, 2, 3, 4], [2, 3]) ➞ false
steps:
  1. sort arr1 and arr2
  2. shift arr1 and arr2
  3. pop arr1 and arr2
  4. compare shifted values:
    if arr1 min > arr2 min (shifted values) && popped arr1 value < arr2 value, return true
    else return false
*/

function canNest(arr1, arr2) {
  let sortedArr1 = arr1.sort(function(a, b){
    return a - b
  })
  let sortedArr2 = arr2.sort(function(a, b) {
    return a - b
  })
  let smallestArr1Number = sortedArr1.shift()
  let smallestArr2Number = sortedArr2.shift()
  let biggestArr1Number = sortedArr1.pop()
  let biggestArr2Number = sortedArr2.pop()
  if(smallestArr1Number > smallestArr2Number && biggestArr1Number < biggestArr2Number) {
    return true
  } else return false
}
console.log(canNest([1, 2, 3, 4], [0, 6]))
console.log(canNest([3, 1], [4, 0]))
console.log(canNest([9, 9, 8], [8, 9]))
console.log(canNest([1, 2, 3, 4], [2, 3]))
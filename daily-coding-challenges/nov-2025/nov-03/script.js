// let pizzaArr = ['cheese', 'pepperoni', 'the works', 'hawaiian']

// console.log(pizzaArr.slice(2, 3))
// console.log(pizzaArr.slice(1,3))
// console.log(pizzaArr.toSpliced(1, 0, 'salami'))//spliced changes an array while toSpliced does not

/*

You are given two arrays and an index. Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.

//function named frankenSplice
//first array should go into second array, maintaining its original order
//first array should enter at n index in second array
//return 1 array



Examples
frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].

frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

frankenSpice([1, 2, 3], [], 1) should return [1, 2, 3]

All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
The first array should remain the same after the function runs.
The second array should remain the same after the function runs.

sandwhich (second array is the buns, first array is filling) / zipper
starting index is final param

*/

// //function named frankenSplice
// function frankenSplice(array1, array2, n) {
//   //first array should go into second array, maintaining its original order
//   return array2.splice(n,0, array1)
//   //first array should enter at n index in second array
//   //return 1 array
// } 
console.log(frankenSplice([1, 2, 3], [4, 5], 1)) //should return [4, 1, 2, 3, 5].


/**
 * parameters: array1, array2, starting index
 * 
 * 
step 1: insert elements in the first array into the second array at the given index/position using splice
step 2: copy the first array using slice with no parameters so it will copy the whole thing
step 3: if one of arrays empty, return not empty array using slice so original array wont get modified
step 4: 
 */

function frankenSplice(arr1, arr2, index) {
  if(arr1.length === 0) {
    return arr2
  } else if(arr2.length === 0) {
    return arr1
  } else if(index > arr2.length) {
    return 'index cannot exceed second array length'
  } else {
    let arr2Copy = arr2.slice()
    arr2Copy.splice(index, 0, ...arr1)
    return arr2Copy
  }
}
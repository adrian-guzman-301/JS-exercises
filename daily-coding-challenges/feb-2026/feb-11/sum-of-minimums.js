/*
thoughts: the function takes in an an array of arrays and wants to return the sum of all minimum values within each array

step 1. declare function with one parameter
step 2. go inside each neseted array
step 3. pull out the smallest number in each
step 4. put these numbers in an empty array
step 5. add all of these numbers
step 6. return step 5 result

*/

function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...[c]), 0);
}

sumOfMinimums([5,6,7,8,9], [1,2,3,4,5], [20, 21, 34, 56, 100])
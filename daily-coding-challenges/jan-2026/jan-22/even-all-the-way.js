/*
1. define "getOnlyEvens" function
2. one parameter: an array of numbers
3. loop through even indeces
4. if the value in even index is even, push it into a new array
5. return new array: all even indeces that contain even numbers
*/

function getOnlyEvens(arr) {
  let evenSteven = []
  for(let i = 0; i < arr.length; i++) {
    if(i % 2 === 0 && arr[i] % 2 === 0) {
      evenSteven.push(arr[i])
    }
  }
  return evenSteven
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]))// ➞ [2, 4]
console.log(getOnlyEvens([0, 1, 2, 3, 4]))// ➞ [0, 2, 4]
console.log(getOnlyEvens([1, 2, 3, 4, 5]))// ➞ []
/*
/*
Write a JavaScript function that takes two arrays as input and returns a new array that contains all elements from both input arrays. Use the spread operator (...) to achieve this.

*/

function combineArrays(arr1, arr2) {
  let spreadArr = [...arr1, ...arr2]
  return spreadArr
}

console.log(combineArrays(['a','c','e'],['b','d','f']));
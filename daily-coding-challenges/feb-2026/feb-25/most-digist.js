//find the length of each index in array
//compare each value's length with each other
//return the longest length
//if 2 numbers in array have the same length, return the first one in array

function findLongest(array) {
  let string = array.map(String)
  let sortedString = string.sort((a, b) => b.length - a.length)
  return parseInt(sortedString[0])
}

console.log(findLongest([1,10,100]))
console.log(findLongest([9000,8,800]))
console.log(findLongest([8,500,900]))
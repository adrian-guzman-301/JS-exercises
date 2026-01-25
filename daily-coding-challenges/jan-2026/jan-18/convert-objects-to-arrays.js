//declare function toArray with one parameter: an object
//loop through each object key-value pair
//change the curly braces to square brackets
//surround each key value with quotations
//replaces colon with comma after in between key and value
//return result
//examples:
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []

function toArray(obj) {
  //console.log(Object.keys(obj) + ' ' + Object.values(obj))
  return Object.entries(obj)
}

console.log(toArray({ a: 1, b: 2 }))
console.log(toArray({ shrimp: 15, tots: 12 }))
console.log(toArray({}))

//filter out strings from an array


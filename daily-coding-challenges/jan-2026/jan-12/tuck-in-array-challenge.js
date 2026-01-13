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

// function tuckIn(arr1, arr2) {
//   return [arr1[0], ...arr2, arr1[1]]
// }

// console.log(tuckIn([1, 10], [2,3,4,5,6,7,8,9]))
// console.log(tuckIn([15, 150], [45, 75, 35]))
// console.log(tuckIn([[1,2], [5,6]], [[3, 4]]))

/*


Create a function named `filterObjects` that takes three arguments: 
- an array of objects (`data`),
- a string representing a property name (`propertyName`), and
- a value.

The function should return a new array containing only the objects from the original array whose value for the specified property matches the provided value. 
If no objects match the criteria, the function should return an empty array.

*/

/*pseudo-code
  step 1. use a method to go through (maybe filter) based on property value
  step 2. if/else statement:
    a. if "if" matches criteria,
    b. return new array of filtered object value
    c. else return empty array
*/

/*

*/



function filterObjects(data, propertyName, value) {
  const newArr = data.filter(
    obj => obj[propertyName] === value
    )
}
                                                           
[
  {
  name: 'john doe',
  age: 45,
  hasKids: true,
},
{
  name: 'tom smith',
  age: 18,
  hasKids: false,
},
{
  name: 'jane',
  age: 79,
  hasKids: false,
},
]
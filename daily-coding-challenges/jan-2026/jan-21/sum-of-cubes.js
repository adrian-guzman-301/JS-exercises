/*
1. define function "sum of cubes"
2. function parameter: an array of numbers
3. get each array number
4. multiply each array number by itself 3 times
5. add each cube
6. return: sum of array number cubes
*/

function sumOfCubes(arr) {
  let cubed = arr.map((num) => num * num * num)
  let sum = cubed.reduce((a, b) => a + b, 0)
  return sum
}

console.log(sumOfCubes([1, 5, 9]))// ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log(sumOfCubes([3, 4, 5]))// ➞ 216
console.log(sumOfCubes([2]))// ➞ 8
console.log(sumOfCubes([]))// ➞ 0
/*
1. define function "findLargestNum"
2. one parameter: an array of arrays with numbers
3. define new empty array
4. look in each parameter sub array
5. get the biggest number in each sub array
6. push each number in step 5 in new array
7. return: a new, single array with the largest numbers of each
*/

function findLargestNums(arraysInYoArray) {
  //let mapped = arraysInYoArray.map((array) => Math.max(array))
  //console.log(Math.max(...mapped))
  console.log(Math.max(...arraysInYoArray))
}


findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])// ➞ [7, 90, 2]
findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])// ➞ [-34, -2, 7]
findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])// ➞ [0.7634, 9.32, 9]
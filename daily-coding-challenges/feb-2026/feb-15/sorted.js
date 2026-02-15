//function accepts 1 parameter: array of numbers
//function returns "yes, ascending" if array numbers sorted in ascending order
  //returns "yes, descending" if descending order
  //"no" if both cases are false
/*examples:
        doTest([1, 3, 9, 4], 'no');
        doTest([4, 3, 1, 9], 'no');
        doTest([1, 2], 'yes, ascending');
        doTest([2, 1], 'yes, descending');
*/
//step 1: loop through each number in array
//step 2. check if current number either matches or is greater than previous number
  //a. if this is true, return "yes, ascending"
//step 3. check if current number either matches or is less than previous number
  //a. if true, return "yes, descending"
//step 4: else return "no"

// function isSortedAndHow(array) {
//   for(let i = 0; i < array.length; i++) {
//     for(let j = i + 1; j < array.length; j++) {
//       if(array[i] == array[j] || array[i] < array[j] + 1) {
//         return "yes, ascending"
//       } else if(array[i] === array[j]) {
//         return "yes, descending"
//       } else {
//         return "no"
//       }
//     }
//   }
// }

// console.log(isSortedAndHow([1,3,9,4]))
// console.log(isSortedAndHow([5,4,4,3,2]))
// console.log(isSortedAndHow([1,2,2,2,3]))
// console.log(isSortedAndHow([10,9, 1]))

// function isSortedAndHow(arr) {
//   return arr.every((x, i) => i == 0 || arr[i - 1] ? 'yes, ascending' :
//          arr.every((x, i) => i == 0 || arr[i - 1] ? 'yes, desending' : 'no'))
// }

function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}

console.log(isSortedAndHow([1,2,3,4]))
// /* 
// =======================================
//                 SUBSTRING
// ======================================= 
// */

// /* 
// -Example 1: Extraction-
// Prompt: Extract a substring from index 4 to 8.
// */
// let stringOne = "Hello, world!";
// console.log(stringOne.substring(4, 8));
// /* 
// -Example 2: One Index-
// Prompt: Extract a substring from index 4 to the end of the string.
// */
// let stringTwo = "JavaScript is fun";
// console.log(stringTwo.substring(4))
// /*
// -Example 3: Reversing Indices-
// Prompt: Extract a substring between indices 10 and 5 (indices are reversed).
// */

// let stringThree = "Learning JavaScript";
// console.log(stringThree.substring(10, 5))
// console.log(stringThree.substring(5, 10))

// /*
// -PRACTICE: Substring Puzzle Game-
// Prompt: Given the string "X7c@5k9pQr#A2w". Extract the substring from index 3 to 7.
// */
// const randomString = "X7c@5k9pQr#A2w";

// function substringFunc(randomString) {
//   return randomString.substring(3, 7)
// }
// console.log(substringFunc(randomString))

// /* 
// =======================================
//                 REPEAT
// ======================================= 
// */

// /*
// -Example 1: Repeating A Word-
// Prompt: Repeat the word "Hey" 3 times.
// */

// let str = "Hey ";
// console.log(str.repeat(3))

// /*
// -Example 2: Creating a Pattern-
// Prompt: Repeat the pattern "\/hi" 5 times to create a border.
// */

// let pattern = "\\/hi";
// console.log(pattern.repeat(5))
// /* 
// -PRACTICE: Repeater's Riddle-
// Prompt: Given the string "A2b#4cD". Repeat the substring from index 2 to 5, 3 times.
// */

// const arg = "A2b#4cD";

// function repeatFunc(arg) {
//   return arg.substring(2, 5).repeat(3)
// }
// console.log(repeatFunc(arg))

// /* 
// =======================================
//                 pair programming--code challenge
// ======================================= 
// */

/*

Write a function that takes an array of strings and a string item as input. The function should remove the first occurrence of item from the array and then add it to the end of the array. You must use both shift and push methods to achieve this.

*/
//create function with 2 inputs: strings array and string item
//output: if string item found in strings array, remove it, and add it to the end of array
  //if string item not found in array, alert user string item not found
  //if array input is empty, return 'input not found'
//declare variable to hold result 
//for loop or for each to loop through strings array
  //check each element and compare each element with string item
    //if [i] === string item
    //remove first occurence of item and push to result variable
/*

Write a function that takes an array of numbers as input and returns a new array with all duplicate numbers removed. You must use reduce and push methods to achieve this.

*/

function boboRemovesString(arrayOfStrings, stringItem) {
  let result = []
  for(let i = 0; i < arrayOfStrings.length; i++) {
    if(arrayOfStrings[i] === stringItem) {
      result.push(arrayOfStrings[i])
    }
  }
  return result;
}
console.log(boboRemovesString(['paw', 'shu', 'adrian'], 'paw'));


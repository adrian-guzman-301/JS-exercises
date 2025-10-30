/*
Create a function that takes two numbers as arguments and returns their sum.

Examples: 	
addition(3, 2) ➞ 5		addition(-3, -6) ➞ -9	addition(7, 3) ➞ 10

Notes: Don't forget to return the result and check for edge cases! 


*/

//parameters: 2 values of type number
//returns: the sum of the 2 values
//examples: addition(3, 2) ➞ 5		addition(-3, -6) ➞ -9	addition(7, 3) ➞ 10
//pseudo-code
    //step 1: declare function named addition with two parameters, x and y
    //step 2: declare sum variable, assigning 'x + y' to the sum variable
    //step 3: return sum variable

function addition(x, y) {
    sum = x + y
    return sum
}
console.log(addition(2,2))
console.log(addition(1,8))
console.log(addition(2,78))
console.log(addition(100,100))
//function "tidyNumber" takes 1 parameter: a number of any length
//function returns true or false
  //true if number whose digits are in non-decreasing order
//example: 12 --> true; 102 --> false
//1. check the first number against the next number
//2. if the first number against the next number is bigger, keep checking if the next number is bigger
//3. if all numbers are always smaller than the next, return true
//4. else return false

function tidyNumber(n) {
  let string = n.toString()
  for(let i = 0; i < string.length - 1; i++) {
    if(string[i] > string[i + 1]) {
      return false
    }
  }
  return true
}

console.log(tidyNumber(123))
console.log(tidyNumber(1024))
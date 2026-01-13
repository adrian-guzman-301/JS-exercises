/*pseudo-code
parameters: an integer
returns: an array containing the two halves of the inputted integer
  caveat: if parameter is odd, make the rightmost number in output array the higher number
example:
  numberSplit(4) ➞ [2, 2]
  numberSplit(10) ➞ [5, 5]
  numberSplit(11) ➞ [5, 6]
  numberSplit(-9) ➞ [-5, -4]
steps to solve:
  1. if input is even, divide number into 2
  2. duplicate number
  3. input step 2 numbers in a new array
  4. return step 3 array
  5. if number is odd, divide number into 2
  6. round down one number and put that into a new array
  7. round up the other number and push that into new array
  8 return step 7 array
*/

function numberSplit(number) {
  if(number % 2 === 0) {
    let evenHalf = number / 2
    return [evenHalf, evenHalf]
  } else {
    let oddHalf = number / 2
    return [Math.floor(oddHalf), Math.ceil(oddHalf)]
  }
}
console.log(numberSplit(4))
console.log(numberSplit(11))
console.log(numberSplit(-9))
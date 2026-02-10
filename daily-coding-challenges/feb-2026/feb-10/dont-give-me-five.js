/*
parameters: 2 numbers, start and end
return: every number, except numbers with a 5, between start and end
example:
  1. 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
  2. 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
pseudo-code:
  1. declare dontGiveMeFive function with 2 parameters: start, end
  2. declare "noFives" empty array
  3. look through every number
  4. if that number is not divisible by 5, put that number in "noFives" array
  5. return "noFives" array
*/

function dontGiveMeFive(start, end) {
  let noFives = []
  for(let i = start; i <= end; i++) {
    if(!i.toString().includes('5')) {
      noFives.push(i)
    } 
  }
  return noFives.length
}

console.log(dontGiveMeFive(1,9))
console.log(dontGiveMeFive(4,17))
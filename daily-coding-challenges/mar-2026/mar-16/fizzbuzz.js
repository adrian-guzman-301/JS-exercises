function fizzbuzz(n) {
  //parameter: i number
  //return: an array containing the numbers 1 to n
    //multiple of 3 instead should be "Fizz"
    //multiple of 5 instead should be "Buzz"
    //multiple of 3 and 5 should be "FizzBuzz"
  //example: fizzbuzz(3) -->  [1, 2, "Fizz"]
  //steps:
    //iterate through n
    //if n % 3 == 0, return "Fizz"
    //if n % 5 == 0, return "Buzz"
    //if n % 3 == 0 && n % 5 == 0, return "FizzBuzz"
    //else return [i]
  let arr = []
  for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz")
    } else if(i % 3 === 0) {
      arr.push("Fizz")
    } else if(i % 5 === 0) {
      arr.push("Buzz")
    } else {
      arr.push(i)
    }
  }
  return arr
}

console.log(fizzbuzz(3))
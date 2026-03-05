function solution(value){
  //assume value is always <=5
  //declare paddedNumber = 00000
  //figure out how many digits are in value
  //based on the digit number, insert value from the right side of
    //paddedNumber
  //return paddedNumber
  //
  //figure out how many digits are in value
  //add 0's to the front of value based on the number of digits in
    //value
  //return value
  let strVal = value.toString()
  let digitCount = strVal.length
  for(let i = digitCount; i < 5; i++) {
      strVal = `0` + strVal
    }
  return `Value is ${strVal}`
}

solution(100)
solution(55555)
solution(1)
solution(4444)
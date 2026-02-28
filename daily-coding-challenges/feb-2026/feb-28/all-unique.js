function hasUniqueChars(str){
  //iterate through entire string
    //for loop or method
  //if iteration reaches a duplicate
    //
  //return false
  let arr = [...new Set(str)] 
  if(arr.join('') === str) {
    return true
  } else {
    return false
  }
}
console.log([hasUniqueChars('hello')])
console.log([hasUniqueChars('abcdefg')])

let hasUniqueChars = (str) => new Set(str).size === str.length;

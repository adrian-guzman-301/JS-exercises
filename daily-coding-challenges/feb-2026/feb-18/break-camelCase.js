function solution(string) {
  // look for a capital letter in string
  // add a space in front of that capital letter
  // return the new string
  for(let i = 0; i < string.length; i++) {
    if(string[i] === string[i].toUpperCase()) {
      return string[i].split(' ')
    }
  }
  return string
}

console.log(solution('camelCase'))
console.log(solution('hello'))
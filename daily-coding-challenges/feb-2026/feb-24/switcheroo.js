function switcheroo(x) {
  //for each 'a' letter in x, switch to b
  //for each 'b' letter in x, switch to a
  //leave all other letters intact
  //return result
  let str = ''
  for(let i = 0; i < x.length; i++) {
    if(x[i] === 'a') {
      str += 'b'
    } else if(x[i] === 'b') {
      str += 'a'
    } else {
      str += x[i]
    }
  }
  return str
}

console.log(switcheroo('aabacbaa'))//--> 'bbabcabb'
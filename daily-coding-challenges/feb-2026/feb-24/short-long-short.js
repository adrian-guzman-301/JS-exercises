function solution(a, b){
  //see which input has a shorter length
  //put shorter length in front of longer length
  //put shorter length behind longer length, too
  //return result
  if(a.length > b.length) {
    return `${b}${a}${b}`
  } if(a.length < b.length) {
    return `${a}${b}${a}`
  }
}
console.log(solution('U', 'False'))

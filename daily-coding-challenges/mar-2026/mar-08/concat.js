function shorterReverseLonger(a,b) {
  //see which is shorter between a and b
  let aLength = a.length
  let bLength = b.length
  //reverse the longest one
  //append and prepend shortest to longest
  //return result
  if(aLength >= bLength) {
    let aReverse = a.split('').reverse().join('')
    return b + aReverse + b
  } else {
    let bReverse = b.split('').reverse().join('')
    return a + bReverse + a
  }
}

console.log(shorterReverseLonger('soda', 'water'))
//exercises:

//minimum
function min(x, y) {
  if(x > y) {
    return y
  } else if(x < y) {
    return x
  } else {
    return 'both values are equal'
  }
}
console.log(min(1,2))
console.log(min(2,2))
console.log(min(3,2))
function hero(bullets, dragons) {
  if(bullets / dragons >= 2) {
    return true
  } else {
    return false
  }
}

console.log(hero(10,5))
console.log(hero(7,4))
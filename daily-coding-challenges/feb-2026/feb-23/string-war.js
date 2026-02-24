function alphabetWar(fight) {
  //declare left and right counter variables, starting at 0
  //if w (+4), p (+3), b (+2), s (+1): left counter goes up accordingly in ()
  //if m (+4), q (+3), d (+2), z (+1): right counter goes up accordingly in ()
  //if left > right, return left
  //if right > left, return right
  let leftKillCount = 0
  let rightKillCount = 0
  if(fight.includes('w')) {
    leftKillCount = leftKillCount + 4
  } else if(fight.includes('p')) {
    leftKillCount = leftKillCount + 3
  } else if(fight.includes('b')) {
    leftKillCount = leftKillCount + 2
  } else if(fight.includes('s')) {
    leftKillCount = leftKillCount + 1
  } else if(fight.includes('m')) {
    rightKillCount = rightKillCount + 4
  } else if(fight.includes('q')) {
    rightKillCount = rightKillCount + 3
  } else if(fight.includes('d')) {
    rightKillCount = rightKillCount + 2
  } else if(fight.includes(`z`)) {
    rightKillCount = rightKillCount + 1
  }
  //return leftKillCount > rightKillCount ? 'left side wins!' : 'right side wins!'
  console.log(`left kill count: ${leftKillCount}`)
  console.log(`right kill count: ${rightKillCount}`) 
  return leftKillCount > rightKillCount ? 'left side wins!' 
    : rightKillCount > leftKillCount ? 'right side wins!'
    : `let's fight again!`
}

console.log(( alphabetWar("z")))
console.log(( alphabetWar("zdqmwpbs")))
console.log(( alphabetWar("zzzzs")))
console.log(( alphabetWar("wwwwww")))
let name = 'adrian'
let city = 'anaheim'
let pets = 'cats'
let sliceThis = 'pizza'
let cats = ['kiki', 'koko']
let kikiObject = {
  name: 'kiki',
  color: 'black and white',
  hungry: 'always',
  belly: 'pink',
  nose: 'black',
  ageInHumanYears: 7
}

//slice to remove 'p' and everything after first 'z'
console.log(sliceThis.slice(1,3))
//splice to add a pet
cats.splice(1, 0, 'my gut microbes')
console.log(cats)
//split
console.log(name.split(''))
//reverse
console.log(cats.reverse())
//join
console.log(cats.join('00100'))
//for loop
function countToNumberLessThan20(number) {
  if(number < 0) {
    return 'i dont feel like counting with negative numbers today'
  }
  for(let i = 0; i <= number; i++) {
    if(number > 20) {
      return 'thats too dam high!'
    } else {
      console.log(i)
    }
  }
}
console.log(countToNumberLessThan20(-1))
//while loop
let handSize = 0
let libraryCount = 99
while (handSize < 7) {
  handSize++
  libraryCount--
}
console.log(`you have ${handSize} cards in your hand`)
console.log(`you have ${libraryCount} cards left in your library`)


//do-while loop
let result = ''
let i = 0

do {
  i += 1
  result += i
} while (i < 5)

console.log(result)

//for-in loop
const weaponAmmoCount = {
  lancer: 550,
  gnasher: 24,
  snub: 48,
  smokes: 1,
}
for(const property in weaponAmmoCount) {
  console.log(`${property}: ${weaponAmmoCount[property]}`)
}

//for-of loop
const landsArray = ['mountain', 'forest', 'plains', 'swamp', 'island']

for(const land of landsArray) {
  console.log(land)
}


//if-else statements
//(already did this)


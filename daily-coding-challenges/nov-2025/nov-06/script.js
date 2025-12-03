// let name = 'adrian'
// let city = 'anaheim'
// let pets = 'cats'
// let sliceThis = 'pizza'
// let cats = ['kiki', 'koko']
// let kikiObject = {
//   name: 'kiki',
//   color: 'black and white',
//   hungry: 'always',
//   belly: 'pink',
//   nose: 'black',
//   ageInHumanYears: 7
// }

// //slice to remove 'p' and everything after first 'z'
// console.log(sliceThis.slice(1,3))
// //splice to add a pet
// cats.splice(1, 0, 'my gut microbes')
// console.log(cats)
// //split
// console.log(name.split(''))
// //reverse
// console.log(cats.reverse())
// //join
// console.log(cats.join('00100'))
// //for loop
// function countToNumberLessThan20(number) {
//   if(number < 0) {
//     return 'i dont feel like counting with negative numbers today'
//   }
//   for(let i = 0; i <= number; i++) {
//     if(number > 20) {
//       return 'thats too dam high!'
//     } else {
//       console.log(i)
//     }
//   }
// }
// console.log(countToNumberLessThan20(-1))
// //while loop
// let handSize = 0
// let libraryCount = 99
// while (handSize < 7) {
//   handSize++
//   libraryCount--
// }
// console.log(`you have ${handSize} cards in your hand`)
// console.log(`you have ${libraryCount} cards left in your library`)


// //do-while loop
// let result = ''
// let i = 0

// do {
//   i += 1
//   result += i
// } while (i < 5)

// console.log(result)

// //for-in loop
// const weaponAmmoCount = {
//   lancer: 550,
//   gnasher: 24,
//   snub: 48,
//   smokes: 1,
// }
// for(const property in weaponAmmoCount) {
//   console.log(`${property}: ${weaponAmmoCount[property]}`)
// }

// //for-of loop
// const landsArray = ['mountain', 'forest', 'plains', 'swamp', 'island']

// for(const land of landsArray) {
//   console.log(land)
// }


// //if-else statements
// //(already did this)




/*

Task 1
Add a property to each friend storing their initials and calculates the sum of all ages to use in calculation of average age. An average is the total of Ages divide for how many friends 



Task 2
Gets an array of all friends older than the average age

Task 3
Gets an array of strings listing the initials and age
Expected output: [ 'AB: 35', 'SW: 45', 'AE: 38', 'IH: 46' ]

Bonus
How you can work in this programmatically (using a function)

*/
//const getInitials = myFriends.split('')




// step 1: make initials property
// step 2: get 0 index of firstname and 0 index of last name and put in initials     property
// step 3: add numbers in age property
// step 4: divide number of friends by friends' sum

// A list of friends stored as an array of objects
const myFriends = [
  { firstname: "Isma", lastname: "Kirby", age: 27 },
  { firstname: "Aaliya", lastname: "Becker", age: 35 },
  { firstname: "Adnaan", lastname: "Tang", age: 22 },
  { firstname: "Rafi", lastname: "Pearson", age: 29 },
  { firstname: "Eshaal", lastname: "Gould", age: 29 },
  { firstname: "Scarlett", lastname: "Whitehead", age: 45 },
  { firstname: "Arslan", lastname: "Esparza", age: 38 },
  { firstname: "Isla-Mae", lastname: "Hastings", age: 46 },
  { firstname: "Eamonn", lastname: "Vang", age: 21 },
  { firstname: "Haya", lastname: "Mcdougall", age: 31 }
];

console.log(myFriends[0])

//make a new array so original isn't modified
//map through original
//get object elements via spread operator
//create a new property called initials
  // index 0 of firstname + index 1 of lastname

  const friendsWithInitials = myFriends.map((friend) => ({
    ...friend,
    initials: `${friend.firstname[0]}${friend.lastname[0]}`
  }))

  const ageSum = friendsWithInitials.reduce((sum, friend) => sum + friend.age, 0)
  
  console.log(ageSum)
  const averageAge = ageSum / friendsWithInitials.length
  console.log(averageAge)
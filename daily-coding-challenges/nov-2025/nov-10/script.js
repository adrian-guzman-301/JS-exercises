// /*

// Implement a simple program that demonstrates the creation and manipulation of Object Literals, Maps, and Sets. The program should include operations like adding elements, accessing values, and iterating over each collection type.

// Step 1: Define an Object Literal Representing a Person
//   properties in person object
//

// Step 2: Create a Map to Store Additional Details About the Person

// Step 3: Create a Set to Store Unique Hobbies of the Person

// */

// //going through an object called a "map"////


// //use const because object 
// //what happens in memeory is var called russel = an object
// //js created a russel object in memory
// //object points to pointed object
// //properties might change but theyre part of that object
// //important: pointers to spots in memory do not change

// const russelBrown = {
//   firstName: 'Russel',
//   lastName: 'Brown',
//   age: 29,
//   phoneNumber: '213551212',
//   email: 'russelbrown@somewhere.com',
//   city: 'Honolulu',
//   languagesSpoken: ['English'],
//   hasChildren: true,
// }

// console.log(russelBrown)

// const detailsMap = new Map();
// detailsMap.set(russelBrown, 'Is going to Antarctica')
// console.log(detailsMap.get(russelBrown))

// const hobbiesSet = new Set();
// hobbiesSet.add('Badminton').add('Chess').add('Rock Climbing');
// //does not allow duplication: look up why
// hobbiesSet.add('Chess')
// for(let hobby of hobbiesSet) {
//   console.log(hobby)
// }




/*

Task 1 - Using filter to Extract Specific Elements
Write a JavaScript function that uses the filter method to extract all the numbers greater than 10 from an array.

const arrayNums = [5, 10, 12, 3, 18, 130, 44];

Task 2 - Using reduce to Calculate the Sum of Numbers
Write a JavaScript function that uses the reduce method to calculate the sum of all numbers in an array.

function sumNumbers(){}

Task 3 - Create an Array of Unique Categories for a Restaurant Menu (reduce)
Extract unique categories from a list of menu items.

const menuItems = [
 { name: 'Pizza', category: 'Main Dish' },
 { name: 'Salad', category: 'Main Dish' },
 { name: 'Pasta', category: 'Main Dish' },
 { name: 'Caesar Salad', category: 'Salad' },
 { name: 'Greek Salad', category: 'Salad' },
];


Task 4 - Count Coffee Shops by Neighborhood (filter)
Imagine you have collected data on various coffee shops in Chicago, including their neighborhoods. You want to analyze this data to understand the distribution of coffee shops across different neighborhoods.

const coffeeShops = [
 { name: 'Cafe A', neighborhood: 'Rogers Park' },
 { name: 'Cafe B', neighborhood: 'Wicker Park' },
 { name: 'Cafe C', neighborhood: 'Rogers Park' },
 { name: 'Cafe D', neighborhood: 'Wicker Park' },
 { name: 'Cafe E', neighborhood: 'Rogers Park' },
];


*/

const arrayNums = [5, 10, 12, 3, 18, 130, 44]
console.log(arrayNums.filter(num => num > 10))

//task 2:
function sumNumbers(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
}
console.log(sumNumbers(arrayNums))
let newArr = [1,2,3,4,5]
console.log(sumNumbers(newArr))


//task 3:
//Task 3 - Create an Array of Unique Categories for a Restaurant Menu (reduce)
  //if the category of the current item is not already in the new array, add it
//Extract unique categories from a list of menu items.
const menuItems = [
 { name: 'Pizza', category: 'Main Dish' },//[] categoru is not in the array, so add it
 { name: 'Salad', category: 'Main Dish' },//['Main Dish'] *is* in array, do nothing
 { name: 'Pasta', category: 'Main Dish' },// same
 { name: 'Caesar Salad', category: 'Salad' },// category is not, add in array
 { name: 'Greek Salad', category: 'Salad' },//category *is* in array, do nothing
];


// const uniqueMenuItems = menuItems.reduce(reducer, []);
// return uniqueMenuItems

const uniqueCategories = menuItems.reduce((accumulatorArr, currentItem) => {
  if(!accumulatorArr.includes(currentItem.category)) {
    accumulatorArr.push(currentItem.category);
  }
  return accumulatorArr;
}, [])

console.log(uniqueCategories)

/*
Task 4 - Count planeswalkers by Plane (filter)
Imagine you have collected data on various planeswalkers across the Magic: The Gathering multiverse. You want to analyze this data to understand the distribution of planeswalkers across different planes.

const planeswalkers = [
 { name: 'Liliana Vess', plane: 'Dominaria' },
 { name: 'Jace Beleren', plane: 'Ravnica' },
 { name: 'Chandra Nalaar', plane: 'Kaladesh' },
 { name: 'Nicol Bolas', plane: 'Dominaria' },
 { name: 'Nissa Revane', plane: 'Zendikar' },
 { name: 'Teferi', plane: 'Dominaria' },
 { name: 'Aurelia', plane: 'Ravnica' },
 { name: 'Gideon Jura', plane: 'Ravnica' },
];

// Your task: Write a function that counts how many planeswalkers are from each plane
// Expected output format: { 'Dominaria': 3, 'Ravnica': 3, 'Kaladesh': 1, 'Zendikar': 1 }

//iterate through each plane value
//keep track of how many times same value appears on each plane
//return output of plan name and plane count


filter by given neighborhood
  coffeShops.filter(shop => shop.neighborhood === neighborhood)
capture that in an array
  let/const shopsInTheNeighborhood = function("Rogers Park")
get the length of the array to get the count of cafes in the neighborhood
  shopsInTheNeighborhood.length
*/

const coffeeShops = [
 { name: 'Cafe A', neighborhood: 'Rogers Park' },
 { name: 'Cafe B', neighborhood: 'Wicker Park' },
 { name: 'Cafe C', neighborhood: 'Rogers Park' },
 { name: 'Cafe D', neighborhood: 'Wicker Park' },
 { name: 'Cafe E', neighborhood: 'Rogers Park' },
];

// const planeCounter = planeswalkers.filter((plane) => planeswalkers.plane === plane)

const countShopsInNeighborhood = (neighborhood) => {
  const shopsInTheNeighborhood = coffeeShops.filter(shop => shop.neighborhood)
  return shopsInTheNeighborhood.length
}
const rogersParkCafeCount = countShopsInNeighborhood('rogers park')
console.log(rogersParkCafeCount)
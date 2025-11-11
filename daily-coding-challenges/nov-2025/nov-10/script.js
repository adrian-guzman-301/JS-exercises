/*

Implement a simple program that demonstrates the creation and manipulation of Object Literals, Maps, and Sets. The program should include operations like adding elements, accessing values, and iterating over each collection type.

Step 1: Define an Object Literal Representing a Person
  properties in person object
Step 2: Create a Map to Store Additional Details About the Person

Step 3: Create a Set to Store Unique Hobbies of the Person

*/

//going through an object called a "map"////


//use const because object 
//what happens in memeory is var called russel = an object
//js created a russel object in memory
//object points to pointed object
//properties might change but theyre part of that object
//important: pointers to spots in memory do not change

const russelBrown = {
  firstName: 'Russel',
  lastName: 'Brown',
  age: 29,
  phoneNumber: '213551212',
  email: 'russelbrown@somewhere.com',
  city: 'Honolulu',
  languagesSpoken: ['English'],
  hasChildren: true,
}

console.log(russelBrown)

const detailsMap = new Map();
detailsMap.set(russelBrown, 'Is going to Antarctica')
console.log(detailsMap.get(russelBrown))

const hobbiesSet = new Set();
hobbiesSet.add('Badminton').add('Chess').add('Rock Climbing');
//does not allow duplication: look up why
hobbiesSet.add('Chess')
for(let hobby of hobbiesSet) {
  console.log(hobby)
}

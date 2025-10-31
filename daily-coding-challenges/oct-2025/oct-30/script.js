//for loop
function countToTen(number) {
  if(number >= 10) {
    console.log('number has to be less than 10')
  } else {
    for(let i = number; i <= 10; i++) {
      console.log(i)
    }
  }
}
countToTen(8)
countToTen(10)
countToTen(11)

//while loop
let number = 5

  while (number < 10) {
    number++
  }

console.log(number)

let n = 0;

while (n < 3) {
  n++;
}

console.log(n)

//do-while loop
let stringifyWorldWonders = ''
let i = 0
do {
  i += 1
  stringifyWorldWonders += i
} while (i < 7)

console.log(stringifyWorldWonders)

//for-in loop
let x = 'signal lost'

const solarSystemSurvey = {
  1: 'mercury is hot and cold', 
  2: 'venus is a runaway greenhouse effect', 
  3: 'earth is the next venus', 
  4: 'mars is the next earth', 
  5: x, 
  6: x, 
  7: x, 
  8: x,
}

for(const planetPosition in solarSystemSurvey) {
  console.log(`planet ${planetPosition}: ${solarSystemSurvey[planetPosition]}`)
}

//for-of loop

const axisOfEvilArray = ['cat poop', 'trash day', 'no food in fridge']

for(const evilThing of axisOfEvilArray) {
  console.log(evilThing)
}
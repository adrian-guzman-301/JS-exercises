//function has 1 parameter: array of numbers
//function returns new array with two numbers:
  // sum of even indices and the sum of odd indices
//example: [50, 60, 70, 80] --> [120, 140]
//step 0: make new empty array
//step 1: grab each even index
//step 2: add each even index
//step 3: push even sum in new array
//step 4: grab each odd index
//step 5: add each odd index
//step 6: push odd sum in new array
//step 7: return new array



function rowWeights(array) {
  let evens = array.filter((currentValue, index) => index % 2 === 0).reduce((a, b) => a + b, 0)
  let odds = array.filter((currentValue, index) => index % 2 !== 0).reduce((a, b) => a + b, 0)
  return [evens, odds]
}

//
console.log(rowWeights([50, 60, 70, 80]))
/*
1. define "calculateDifference" function
2. 2 parameters: an object and a number
3. add all numbers in object
4. subract step 3 sum by second parameter
5. return step 4 result
*/

function calculateDifference(stolenItemsObject, policyLimitNumber) {
  let totalStolenNumbers = Object.values(stolenItemsObject)
  let sumStolenValue = totalStolenNumbers.reduce((a, b) => a + b, 0)
  return sumStolenValue - policyLimitNumber
}

console.log(calculateDifference({ "baseball bat": 20 }, 5))// ➞ 15
console.log(calculateDifference({ skate: 10, painting: 20 }, 19))// ➞ 11
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 },400))// ➞ 1
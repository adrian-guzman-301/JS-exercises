function minMax(arr) {
  let newArr = []
	let sorted = arr.sort(function(a, b) {
    return a - b
  })
  console.log(sorted)
  let smallestNum = sorted.shift()
  console.log(smallestNum)
  let biggestNum = sorted.pop()
  console.log(biggestNum)
  newArr.push(smallestNum, biggestNum)
  return newArr
}
console.log(minMax([14, 35, 6, 1, 34, 54]))
// console.log(minMax([1]))
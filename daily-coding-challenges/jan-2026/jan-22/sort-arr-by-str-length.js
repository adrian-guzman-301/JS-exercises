/*
1. define function "sortByLength"
2. 1 parameter: an array of strings
3. make new array "ascendingOrder"
4. count each letter in each string
5. put the smallest counted string first in new array
6. do the same for the second longest, until no more strings left
7. return: an ascendingOrder array, original strings sorted from shortest to longest
*/

function sortByLength(arr) {
  arr.sort((a, b) => a.length - b.length)
  return arr
}

console.log(sortByLength(["Google", "Apple", "Microsoft"]))
//➞ ["Apple", "Google", "Microsoft"]

console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]))
//➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

console.log(sortByLength(["Turing", "Einstein", "Jung"]))
//➞ ["Jung", "Turing", "Einstein"]
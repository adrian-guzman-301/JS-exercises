/*pseudo-code
1. declare function "compact" with 1 parameter: an array
2. filter out all falsey values from array
3. return an array of only truthy values

examples:
compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]
 */



function compact(arr) {
  return arr.filter(Boolean)
}

console.log(compact([0, 1, false, 2, "", 3]))
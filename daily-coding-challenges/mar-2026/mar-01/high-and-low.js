function highAndLow(nums) {
  //iterate through nums
  //get highest value
  //get lowest value
  //return, within a string, "highest value, lowest value"
  nums = nums.split(' ')
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}
console.log(highAndLow('5 3 1 2 4'))
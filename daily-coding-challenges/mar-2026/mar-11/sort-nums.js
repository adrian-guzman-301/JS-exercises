function solution(nums) {
  if(nums == null || nums == []) {
    return []
  } else {
    return nums.sort((a, b) => a - b)
  }
}

console.log(solution([1,2,10,50,5]))
console.log(solution(null))
console.log(solution([]))
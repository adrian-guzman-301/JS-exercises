function stalinSort(array) {
  //input: an array of numbers
  //return: ascending array of numbers kept in their original place, removing all other numbers in place
  //example: [5, 3, 1, 2, 4] → [5]   
  //steps
    //0. declare new empty array
    //1. iterate through loop
    //2. if current number >= next number, push it in empty array
    //3. return new array
  let newArr = []
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length - 1; j++) {
      if(i >= j) {
        newArr.push(i)
      }
    }
  }
  return newArr
}

console.log(stalinSort([5,3,1,2,4]))
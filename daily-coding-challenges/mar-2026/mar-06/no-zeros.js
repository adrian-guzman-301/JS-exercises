function noBoringZeros(n) {
  while(n % 10 == 0 && n != 0) {
    n = n / 10
  }
  return n
}


console.log(noBoringZeros(1000))
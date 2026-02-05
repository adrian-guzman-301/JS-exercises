/* pseudo-code
1. declare function sortDrinkByPrice
2. 1 parameter: an array of objects
  a. each object has 2 properties: name and price
3. access price value in each object
4. compare the value with all other values
5. put lowest prices first, higher prices last
return: drinks object sorted by price in ascending order
*/

function sortDrinkByPrice(drinks) {
  let sorted = drinks.sort((a, b) => a.price - b.price)
  console.log(sorted)
}

//sortDrinkByPrice()

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
/*1️⃣ Uppercase String Promise
Implement a function that takes a string and returns a promise. The promise should resolve with the uppercase version of the string, but reject if the string is null. */

function uppercaseString(str) {
  return new Promise((resolve, reject) => {
    if(str === null) {
      reject(`string is null`)
    } else {
      resolve(str.toUpperCase())
    }
  })
}

uppercaseString('hello world')
  .then(result => console.log(result))
  .catch(error => console.error(error))
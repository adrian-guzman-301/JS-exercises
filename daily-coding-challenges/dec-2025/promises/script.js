/* =========== Uppercase String Promise =========== */

function uppercaseString(str) {
  return new Promise((resolve, reject) => {
    if(str !== null) {
      resolve(str.toUpperCase())
    } else {
      reject(new Error('String is null.'))
    }
  })
}
uppercaseString(`what's up with it!`) 
  .then(result => console.log(result))
  .catch(error => console.log(error))

/* ========== Simulated Data Fetching ========== */

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('not much, yo')
    }, 2000)
  })
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.log(error))

/* ========== Asynchronous Request Queue ========== */

class AsyncQueue {
  constructor() {}
}

// // Example task factory function
// const createTask = () => {

// };

// // Create a queue with a concurrency limit of 3

// // Add tasks to the queue
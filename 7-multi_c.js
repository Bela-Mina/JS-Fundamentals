// 7-multi_c.js
// Prints "C is fun" x times based on the first argument

const arg = process.argv[2];
const times = parseInt(arg);

if (isNaN(times) || times <= 0) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < times; i++) {
    console.log("C is fun");
  }
}


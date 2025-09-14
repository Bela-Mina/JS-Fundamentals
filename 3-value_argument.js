 
// Prints the first argument passed, or "No argument" if none

const arg = process.argv[2]; // The first user argument (after node and script)

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}

/* Write a program to find the remainder when one number
is divided by another & log the result into the console */

function findRemainder(a, b) {
  if (b == 0) {
    console.log("Error: Division by zero is not allowed.");
  } else {
    var remainder = +a % +b;
    console.log("The remainder when a is divided by b is:", remainder);
  }
}

// Get command-line arguments
const args = process.argv.slice(2);

// Ensure we have exactly two arguments
if (args.length !== 2) {
  console.log("Please provide exactly two numbers as arguments.");
} else {
  findRemainder(args[0], args[1]);
}

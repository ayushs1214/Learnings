/* Write a program to subtract two numbers and log the result to the console */

function subtractTwoNumbers(a, b) {
  var difference = +a - +b;
  console.log("The difference between a & b is:", difference);
}

// Get command-line arguments
const args = process.argv.slice(2);

// Ensure we have exactly two arguments
if (args.length !== 2) {
  console.log("Please provide exactly two numbers as arguments.");
} else {
  subtractTwoNumbers(args[0], args[1]);
}

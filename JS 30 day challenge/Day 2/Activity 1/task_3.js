/* Write a program to Multiply two numbers and log the result to the console */

function multiplyTwoNumbers(a, b) {
  var product = +a * +b;
  console.log("The product of a & b is:", product);
}

// Get command-line arguments
const args = process.argv.slice(2);

// Ensure we have exactly two arguments
if (args.length !== 2) {
  console.log("Please provide exactly two numbers as arguments.");
} else {
  multiplyTwoNumbers(args[0], args[1]);
}

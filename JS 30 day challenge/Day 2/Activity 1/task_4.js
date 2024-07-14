/* Write a program to divide two numbers and log the result to the console */

function divideTwoNumbers(a, b) {
  if (b == 0) {
    console.log("Error: Division by zero is not allowed.");
  } else {
    var quotient = +a / +b;
    console.log("The quotient of a & b is:", quotient);
  }
}

// Get command-line arguments
const args = process.argv.slice(2);

// Ensure we have exactly two arguments
if (args.length !== 2) {
  console.log("Please provide exactly two numbers as arguments.");
} else {
  divideTwoNumbers(args[0], args[1]);
}

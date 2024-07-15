/* Write a code that uses ternary opertor to check 
if a number is even or odd & log the result to console */

function checkEvenOrOdd(number) {
  let result = (number % 2 === 0) ? "even" : "odd";
  console.log(`${number} is ${result}`);
}

// Example usage:
checkEvenOrOdd(10); // Outputs: 10 is even
checkEvenOrOdd(7);  // Outputs: 7 is odd
checkEvenOrOdd(0);  // Outputs: 0 is even

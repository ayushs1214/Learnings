/* Facotiral Calculation Script: Create a script that calculates the factorial of a number using a do...while loop. */

function factorial(n) {
  if (n < 0) {
    return "Error: Factorial is not defined for negative numbers.";
  }

  let result = 1;
  let i = n;

  do {
    result *= i;
    i--;
  } while (i > 0);

  return result;
}

// Example usage:
const number = 170; // Change this number to calculate the factorial of a different number
const fact = factorial(number);
console.log(`The factorial of ${number} is ${fact}`);

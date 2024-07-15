/* Write a script that performs basic arithmetic 
opetrations (+,-,/,*,%) on two numbers and log the results */

function performArithmeticOperations(a, b) {
  console.log(`Addition of ${a} and ${b}: ${a + b}`);
  console.log(`Subtraction of ${b} from ${a}: ${a - b}`);
  console.log(`Multiplication of ${a} and ${b}: ${a * b}`);
  console.log(`Division of ${a} by ${b}: ${a / b}`);
  console.log(`Modulus of ${a} and ${b}: ${a % b}`);
}

// Example usage:
let number1 = 12;
let number2 = 5;

performArithmeticOperations(number1, number2);

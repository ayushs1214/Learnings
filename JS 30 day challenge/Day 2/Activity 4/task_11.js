/* Write a program that uses && operator to combine
two conditions and log the result to the console */

function checkConditions(a, b) {
  if (a > 0 && b > 0) {
      console.log(`Both ${a} and ${b} are positive numbers.`);
  } else {
      console.log(`One or both of the numbers ${a} and ${b} are not positive.`);
  }
}

// Example usage:
let number1 = 5;
let number2 = 10;

checkConditions(number1, number2);

number1 = -5;
number2 = 10;

checkConditions(number1, number2);

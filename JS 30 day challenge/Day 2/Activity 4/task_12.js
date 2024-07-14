/* Write a program that uses || operator to combine
two conditions and log the result to the console */

function checkConditions(a, b) {
  if (a > 0 || b > 0) {
      console.log(`At least one of the numbers ${a} or ${b} is positive.`);
  } else {
      console.log(`Neither ${a} nor ${b} is positive.`);
  }
}

// Example usage:
let number1 = -5;
let number2 = 10;

checkConditions(number1, number2);

number1 = -5;
number2 = -10;

checkConditions(number1, number2);

/* Write a program to compare two numbers using
== & === & log the result to the console. */

function compareNumbers(a, b) {
  if (a == b) {
      console.log(`${a} is equal to ${b} (using ==)`);
  } else {
      console.log(`${a} is not equal to ${b} (using ==)`);
  }

  if (a === b) {
      console.log(`${a} is strictly equal to ${b} (using ===)`);
  } else {
      console.log(`${a} is not strictly equal to ${b} (using ===)`);
  }
}

// Example usage:
let number1 = 10;
let number2 = '10';

compareNumbers(number1, number2);

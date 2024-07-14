/* Write a program to compare two numbers using
>= & <= & log the result to the console. */

function compareNumbers(a, b) {
  if (a > b) {
      console.log(`${a} is greater than ${b}`);
  } else if (a < b) {
      console.log(`${a} is less than ${b}`);
  } else {
      console.log(`${a} is equal to ${b}`);
  }
}

// Example usage:
let number1 = 10;
let number2 = 20;

compareNumbers(number1, number2);

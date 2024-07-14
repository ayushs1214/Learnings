/* Write a program that uses a ternary operator to determine
 if a number is positive or negative and logs the result */

 function checkNumber(a) {
  let result = (a >= 0) ? `${a} is positive.` : `${a} is negative.`;
  console.log(result);
}

// Example usage:
let number1 = 10;
let number2 = -5;
let number3 = 0;

checkNumber(number1); // 10 is positive.
checkNumber(number2); // -5 is negative.
checkNumber(number3); // 0 is positive.

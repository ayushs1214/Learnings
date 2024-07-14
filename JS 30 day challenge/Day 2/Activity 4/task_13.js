/* Write a program that uses ! operator to negate
a condition and log the result to the console */

function checkCondition(a) {
  if (!a) {
      console.log(`${a} is falsy.`);
  } else {
      console.log(`${a} is truthy.`);
  }
}

// Example usage:
let value1 = 0;
let value2 = 10;
let value3 = null;
let value4 = "Hello";

checkCondition(value1); // 0 is falsy.
checkCondition(value2); // 10 is truthy.
checkCondition(value3); // null is falsy.
checkCondition(value4); // "Hello" is truthy.

/* Write a program to add two numbers and log the result to the console */

// function addTwoNumbers(a, b) {
//   var sum = a + b;
//   console.log("The sum of a & b is:", sum);
// }

// // Using prompt to get user input (only works in browsers)
// var a = parseInt(prompt("Enter the value of a:"));
// var b = parseInt(prompt("Enter the value of b:"));

// addTwoNumbers(a, b);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the value of a: ', (a) => {
  rl.question('Enter the value of b: ', (b) => {
    addTwoNumbers(parseInt(a), parseInt(b));
    rl.close();
  });
});

function addTwoNumbers(a, b) {
  var sum = a + b;
  console.log("The sum of a & b is:", sum);
}

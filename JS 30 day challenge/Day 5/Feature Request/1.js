/* Even or Odd function script: Write a script that includes a
function to check if a number is even or odd & logs the result */

function checkEvenOrOdd(number) {
  // Using ternary operator to log the result
  console.log(number % 2 === 0 ? `${number} is even.` : `${number} is odd.`);
}

// Example usage:
checkEvenOrOdd(10); // Output: 10 is even.
checkEvenOrOdd(15); // Output: 15 is odd.

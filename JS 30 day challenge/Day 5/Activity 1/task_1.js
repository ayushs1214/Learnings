/* Write a function to check if a number is even or odd & log the result to the console */

function evenOrOdd(n) {
  if (n === 0) {
    console.log(n, "is neither even nor odd, it is", n);
  } else if (n % 2 === 0) {
    console.log(n, "is even");
  } else if (n % 2 !== 0) {
    console.log(n, "is odd");
  } else {
    console.log("Invalid Input");
  }
}

// Example Usage
evenOrOdd(5);  // Output: 5 is odd
evenOrOdd(2);  // Output: 2 is even
evenOrOdd(0);  // Output: 0 is neither even nor odd, it is 0
evenOrOdd(-3); // Output: -3 is odd

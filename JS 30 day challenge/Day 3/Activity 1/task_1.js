/* Write a program to check if a number is positive,
negative or zero, & log the result to console */

function checkNum(a) {
  if (a > 0) {
      console.log(`${a} is positive`);
  } else if (a === 0) {
      console.log(`${a} is zero`);
  } else {
      console.log(`${a} is negative`);
  }
}

// Example usage:
checkNum(10); // 10 is positive
checkNum(0);  // 0 is zero
checkNum(-5); // -5 is negative

/* Write a program to find the largest of three
numbers using nested if-else statments */

function largestNumber(a, b, c) {
  if (a >= b) {
      if (a >= c) {
          console.log(a + " is the largest number.");
      } else {
          console.log(c + " is the largest number.");
      }
  } else {
      if (b >= c) {
          console.log(b + " is the largest number.");
      } else {
          console.log(c + " is the largest number.");
      }
  }
}

// Example usage:
largestNumber(10, 20, 30); // 30 is the largest number.
largestNumber(30, 15, 10); // 30 is the largest number.
largestNumber(20, 20, 10); // 20 is the largest number.
largestNumber(10, 30, 30); // 30 is the largest number.

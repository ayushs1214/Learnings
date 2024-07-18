/* Write an expression to find the maximum of two numbers & log the result to the console */

// function largestNumber (a,b)
// {
//   if (a > b)
//   {
//     console.log(a, "is the largest number amongst", a, "&", b);
//   }
//   else if (b > a)
//   {
//     console.log(b, "is the largest number amongst", a, "&", b);
//   }
//   else
//   {
//     console.log ("Both numbers are equal");
//   }
// }

// //Example Numbers
// largestNumber(10, 20);
// largestNumber(20,9);
// largestNumber(3,3);


function findMax(a, b) {
  let maxNumber = Math.max(a, b);
  console.log("The maximum of", a, "and", b, "is", maxNumber);
  return maxNumber;
}

// Example usage
findMax(5, 10);  // Output: The maximum of 5 and 10 is 10
findMax(-3, 7);  // Output: The maximum of -3 and 7 is 7

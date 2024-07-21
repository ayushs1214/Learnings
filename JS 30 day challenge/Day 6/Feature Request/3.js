/* Array Iteration Script: Write a script that iterates over an array
using both 'for' loop and 'forEach' method and logs each element */

const array = [1,2,3,4,5];
console.log("Using for loop:");

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}

console.log("Array forEach element");

  array.forEach(element =>
  {
    console.log(element);
  }
);
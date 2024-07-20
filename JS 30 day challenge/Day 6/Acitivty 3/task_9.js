/* Use the reduce method to calculate the sum of all numbers in the array and log the result */

const array = [1, 2, 3, 4, 5];

// Use the 'reduce' method to calculate the sum of all numbers in the array
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Log the result
console.log(sum);

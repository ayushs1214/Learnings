/* Array Transformation Script: Create a script that uses 'map',
'filter', & 'reduce' methods to transform & agregate array data */

// Initial arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Using 'map' to create a new array where each element is doubled
const mappedArray = array1.map(num => num * 2); // [2, 4, 6]

// Using 'filter' to create a new array with only even numbers
const filteredArray = array2.filter(num => num % 2 === 0); // [4, 6]

// Using 'reduce' to calculate the sum of all numbers in the array
const reducedSum = array1.reduce((acc, num) => acc + num, 0); // 6

// Logging the results
console.log("Mapped Array:", mappedArray);
console.log("Filtered Array:", filteredArray);
console.log("Reduced Sum:", reducedSum);

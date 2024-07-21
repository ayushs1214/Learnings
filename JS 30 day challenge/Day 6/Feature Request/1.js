/* Array Manipulation Script: Write a script that demonstrates the creation of an array,
adding & removing elements using 'push', 'pop', 'shift' & 'unshift' methods. */

// Initial array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Adding an element to the end using 'push'
array.push(10); // Adds 10 to the end of the array

// Removing the last element using 'pop'
array.pop(); // Removes the last element (which is 10)

// Removing the first element using 'shift'
array.shift(); // Removes the first element (which is 1)

// Adding an element to the beginning using 'unshift'
array.unshift(0); // Adds 0 to the beginning of the array

// Log the final array
console.log(array);

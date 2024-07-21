/* Two Dimensional Array Scipt: Create a script that demonstrates 
the creation & manipulation of a two dimensional array */

// Create a two-dimensional array (matrix)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Log the entire matrix
console.log("Initial Matrix:");
console.log(matrix);

// Accessing specific elements
console.log("Access specific elements:");
console.log("Element at (0, 0):", matrix[0][0]);
console.log("Element at (1, 2):", matrix[1][2]);

// Modifying elements
matrix[2][1] = 10;
console.log("Matrix after modifying an element (7 to 10 at position (2, 1)):");
console.log(matrix);

// Adding a new row
const newRow = [10, 11, 12];
matrix.push(newRow);
console.log("Matrix after adding a new row:");
console.log(matrix);

// Adding a new column
for (let i = 0; i < matrix.length; i++) {
  matrix[i].push(i + 13);
}
console.log("Matrix after adding a new column:");
console.log(matrix);

// Iterating over the matrix
console.log("Iterating over the matrix:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`Element at (${i}, ${j}):`, matrix[i][j]);
  }
}

// Summing all elements in the matrix
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
}
console.log("Sum of all elements in the matrix:", sum);
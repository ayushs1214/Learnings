/* Pattern printing script: Write a script that prints a pattern of stars using nested loop */

// Number of rows for the pattern
let rows = 5;

// Outer loop for the number of rows
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    // Inner loop for printing stars
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    // Print the pattern for the current row
    console.log(pattern);
}
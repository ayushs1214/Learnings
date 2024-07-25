/* Library Object Script: Create a script that defines a library object
containing an aaray of book objects & logs the library's details. */

// Define the library object with an array of book objects
var library = {
  books: [
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      published: 1951
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      published: 1925
    }
  ]
};

// Log the library's details
console.log("Library contains the following books:");
library.books.forEach(function(book, index) {
  console.log(`Book ${index + 1}:`);
  console.log(`  Title: ${book.title}`);
  console.log(`  Author: ${book.author}`);
  console.log(`  Published: ${book.published}`);
});
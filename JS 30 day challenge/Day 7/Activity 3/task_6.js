/* Access & log the name of the library & the titles of all the books in the library. */

// Create a library object
const library = {
  name: "My Library",
  books: ["Book 1", "Book 2", "Book 3"]
};

// Access and log the name of the library
console.log("Library Name:", library.name);

// Access and log the titles of all the books in the library
console.log("Book Titles:");
library.books.forEach(title => {
  console.log(title);
});
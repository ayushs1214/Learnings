/* Add a method to the book object returns a string with the
books title & author, & log the result of calling this method. */

// Create a book object
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  
  // Method to return a string with the book's title and author
  getDescription: function() {
    return `Title: ${this.title}, Author: ${this.author}`;
  }
};

// Log the result of calling the method
console.log(book.getDescription());
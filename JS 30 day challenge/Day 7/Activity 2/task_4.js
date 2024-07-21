/* Add a method to the book object that takes a parameter (year) & 
updates the book's year property, then log the updated object. */

// Create a book object
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  
  // Method to return a string with the book's title and author
  getDescription: function() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
  },

  // Method to update the year property
  updateYear: function(newYear) {
    this.year = newYear;
  }
};

// Log the initial object
console.log("Initial book object:", book.getDescription());

// Update the year property
book.updateYear(2020);

// Log the updated object
console.log("Updated book object:", book.getDescription());
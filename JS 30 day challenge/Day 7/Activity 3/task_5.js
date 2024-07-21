/* Create a nested object representing a library with properties like name &
books (an array of book objects), & log the library object to the console. */

const library = {
  name: "Central Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925
    }
  ]
};

// Log the library object to the console
console.log("Library Object:", library);
let myLibrary = [];

// Constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBook() {
  const newBook = new Book("Harry Potter", "Rowling", 200, false);

  myLibrary.push(newBook);
}

addBook();
console.table(myLibrary);

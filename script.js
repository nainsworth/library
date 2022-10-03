let myLibrary = [];

function Book() {

}

function addToLibrary() {

}



const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const addBook = document.querySelector("[data-addBook]");
const addTitle = document.querySelector("[data-title]");
const addAuthor = document.querySelector("[data-author]");
const addPages = document.querySelector("[data-pages]");
const addIsRead = document.querySelector("[data-isRead]");

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function keypress(e) {
  if (e.key == "Escape") {
    closeModal();
  }
}

addBook.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
window.addEventListener("keydown", keypress);


// // Constructor
// function Book(title, author, pages, isRead) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   isRead() {
//     if () {
//       this.isRead = true;
//     } else {
//     return this.isRead = false;
//     }
//   }

// }

// function addBook() {
//   const newBook = new Book("Harry Potter", "Rowling", 200, false);

//   myLibrary.push(newBook);
// }

// addBook();
// console.table(myLibrary);


// // Local Storage

// const saveLocal = () => {
//   localStorage.setItem('library', JSON.stringify(library.books))
// }

// const restoreLocal = () => {
//   const books = JSON.parse(localStorage.getItem('library'))
//   if (books) {
//     library.books = books.map((book) => JSONToBook(book))
//   } else {
//     library.books = []
//   }
// }
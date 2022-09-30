const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const addBook = document.querySelector("[data-addBook]");

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// function keypress(e) {
//     if (e.key === "Escape)") {
//         closeModal();
//     }
// }

addBook.addEventListener("click", openModal);
// window.addEventListener("keydown", keypress);

// let myLibrary = [];

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

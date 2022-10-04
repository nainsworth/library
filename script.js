// ---------- Data -----------

const addTitle = document.querySelector("[data-title]");
const addAuthor = document.querySelector("[data-author]");
const addPages = document.querySelector("[data-pages]");
const addIsRead = document.querySelector("[data-isRead]");

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addToLibrary() {
  const title = addTitle.value;
  const author = addAuthor.value;
  const pages = addPages.value;
  const isRead = addIsRead.checked;
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

// ---------- Modal -----------

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const addBook = document.querySelector("[data-addBook]");
const submit = document.querySelector("[data-submit]");

function clearInputs() {
  addTitle.value = "";
  addAuthor.value = "";
  addPages.value = "";
  addIsRead.checked = false;
}

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  clearInputs();
}

function keypress(e) {
  if (e.key == "Escape") {
    closeModal();
  }
}

// ---------- User Interface -----------

const library = document.querySelector("[data-library]");

function updateLibrary() {
  library.innerText = "";
  for (let book of myLibrary) createBookCard(book);
}

function addBookToLibrary(e) {
  e.preventDefault();
  addToLibrary();
  updateLibrary();
  closeModal();
}

addBook.addEventListener("click", openModal);
submit.addEventListener("click", addBookToLibrary);
overlay.addEventListener("click", closeModal);
window.addEventListener("keydown", keypress);

// ---------- Create Book Card -----------

function createBookCard(book) {
  const card = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const isRead = document.createElement("button");
  const remove = document.createElement("button");

  card.classList.add("bookCard");

  title.textContent = `"${book.title}"`;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  remove.textContent = "Remove";

  if (book.isRead === true) {
    isRead.classList.add("read");
    isRead.textContent = "Read";
  } else {
    isRead.classList.add("notRead");
    isRead.textContent = "Not Read";
  }

  library.appendChild(card);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(isRead);
  card.appendChild(remove);
}

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

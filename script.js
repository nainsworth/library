// ---------- Data -----------

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {
  constructor() {
    this.myLibrary = [];
  }

  addToLibrary(newBook) {
    this.myLibrary.push(newBook);
  }
}

const library = new Library();

// ---------- Modal -----------

const addTitle = document.querySelector("[data-title]");
const addAuthor = document.querySelector("[data-author]");
const addPages = document.querySelector("[data-pages]");
const addIsRead = document.querySelector("[data-isRead]");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const addBook = document.querySelector("[data-addBook]");
const submit = document.querySelector("[data-submit]");

const modalInput = () => {
  const title = addTitle.value;
  const author = addAuthor.value;
  const pages = addPages.value;
  const isRead = addIsRead.checked;
  return new Book(title, author, pages, isRead);
};

const clearInputs = () => {
  addTitle.value = "";
  addAuthor.value = "";
  addPages.value = "";
  addIsRead.checked = false;
};

const openModal = () => {
  modal.classList.add("active");
  overlay.classList.add("active");
}

const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  clearInputs();
}

const keypress = (e) => {
  if (e.key == "Escape") {
    closeModal();
  }
}

// ---------- User Interface -----------

const libraryList = document.querySelector("[data-library]");

const updateLibrary = () => {
  libraryList.innerText = "";
  for (let book of library.myLibrary) createBookCard(book);
  saveLocal();
}

const addBookToLibrary = (e) => {
  const newBook = modalInput();
  e.preventDefault();
  library.addToLibrary(newBook);
  updateLibrary();
  closeModal();
};

addBook.addEventListener("click", openModal);
submit.addEventListener("click", addBookToLibrary);
overlay.addEventListener("click", closeModal);
window.addEventListener("keydown", keypress);

// ---------- Create Book Card -----------

const createBookCard = (book) => {
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

  libraryList.appendChild(card);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(isRead);
  card.appendChild(remove);

  isRead.addEventListener("click", () => {
    book.isRead = !book.isRead;
    updateLibrary();
  });

  remove.addEventListener("click", () => {
    library.myLibrary.splice(library.myLibrary.indexOf(book), 1);
    updateLibrary();
  });
}

// ---------- Local Storage -----------

const saveLocal = () => {
  localStorage.setItem("savedLibrary", JSON.stringify(library.myLibrary));
}

const restoreLocal = () => {
  const books = JSON.parse(localStorage.getItem("savedLibrary"));
  if (!localStorage.savedLibrary) {
    updateLibrary();
  } else {
    library.myLibrary = books;
    updateLibrary();
  }
}

restoreLocal();

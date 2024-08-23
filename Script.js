const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const defaultBook1 = new Book(
  "The dance of the Dragons",
  "Jon Snow",
  91,
  "not read"
);
myLibrary.push(defaultBook1);
display_books();

function display_books() {
    
}

function addBookToLibrary() {
  const title = document.querySelector("title");
  const author = document.querySelector("author");
  const pages = document.querySelector("pages");
  const read = document.querySelector("read");

  const book1 = new Book(title, author, pages, read);
  myLibrary.push(book1);
}

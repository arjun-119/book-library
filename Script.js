const myLibrary = [];
const display_container = document.querySelector(".content");

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
    myLibrary.forEach(book=>{

      const card = document.createElement('div');
      card.className = "card";

      const title = document.createElement('div');
      title.textContent = `Title: ${book.title}`;

      const author = document.createElement('div');
      author.textContent = `Author: ${book.author}`;

      const pages = document.createElement('div');
      pages.textContent = `Pages: ${book.pages}`;

      const read_status = document.createElement('div');
      read_status.textContent = `Read Status: ${book.read}`;

      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(read_status);
      
      display_container.appendChild(card);
    })
}

function addBookToLibrary() {
  const title = document.querySelector("title");
  const author = document.querySelector("author");
  const pages = document.querySelector("pages");
  const read = document.querySelector("read");

  const book1 = new Book(title, author, pages, read);
  myLibrary.push(book1);
}

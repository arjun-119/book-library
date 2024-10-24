const myLibrary = [];
const display_container = document.querySelector(".content");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const defaultBook1 = new Book("The dance of the Dragons", "Jon Snow", 91, true);
myLibrary.push(defaultBook1);
display_books();

function display_books() {
  display_container.innerHTML = "";
  myLibrary.forEach((book, index) => {

    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("div");
    title.textContent = `Title: ${book.title}`;

    const author = document.createElement("div");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("div");
    pages.textContent = `Pages: ${book.pages}`;

    const read_status = document.createElement("button");
    read_status.textContent = book.read ? "Read" : "Not read";

    read_status.addEventListener("click", ()=>{
      book.read = !book.read;
      read_status.textContent = book.read ? "Read" : "Not read";
    })

    const remove_button = document.createElement("button");
    remove_button.textContent = "Remove";

    remove_button.addEventListener("click",()=>{
      myLibrary.splice(index,1);
      display_books();
    })
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read_status);
    card.appendChild(remove_button);

    display_container.appendChild(card);
  });
}

function addBookToLibrary(title, author, pages, read) {
  const new_book = new Book(title, author, pages, read);
  myLibrary.push(new_book);
}

const dialog = document.querySelector("dialog");
const add_button = document.querySelector("#add");
const close_button = document.querySelector("#close_button");
const submit_button = document.querySelector("#submit_button");
const form = dialog.querySelector("form");

add_button.addEventListener("click", () => {
  dialog.showModal();
});

close_button.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const add_book = new Book(
    formData.get("title"),
    formData.get("author"),
    formData.get("pages"),
    formData.get("read") === "on"
  );
  myLibrary.push(add_book);

  dialog.close();
  display_books();

  form.reset();
});


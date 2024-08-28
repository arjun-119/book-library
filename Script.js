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
  "Read"
);
myLibrary.push(defaultBook1);
display_books();
myLibrary.pop();

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

function addBookToLibrary(title, author, pages, read) {
  const new_book = new Book(title, author, pages, read);
  myLibrary.push(new_book);
}

const dialog = document.querySelector("dialog")
const add_button = document.querySelector("#add");
const close_button = document.querySelector("#close_button");
const submit_button = document.querySelector("#submit_button");
const form = dialog.querySelector("form");

add_button.addEventListener("click", ()=>{
  dialog.showModal();
});

close_button.addEventListener("click", ()=>{
  dialog.close();
  });

form.addEventListener("submit", (event)=>{
  event.preventDefault();

  const formData = new FormData(form);
  let status = formData.get("read") === "on";

  if(status === true)
    status = "Read";
  
  else
    status = "Not read";

  const add_book = new Book(formData.get("title"), formData.get("author"),
  formData.get("pages"), status);
  myLibrary.push(add_book);

  dialog.close();
  display_books();
  myLibrary.pop();
    
 } )





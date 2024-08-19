const content_area = document.querySelector("#content");
const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;    
}

const defaultBook1 = new Book("The dance of the Dragons", "Jon Snow", 91, "not read");
myLibrary.push(defaultBook1);
display_books();

function display_books(){

}

function addBookToLibrary() {

}


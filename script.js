// const myLibrary = [];

// function Book(title, author, pages, hasRead) {
//     this.id = crypto.randomUUID();
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.hasRead = hasRead;
  
//     this.info = function() {
//       const readStatus = this.hasRead ? "read" : "not read yet";
//       return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
//     };
//   }

// function addBookToLibrary(title, author, pages, hasRead) {
//     const newBook = new Book(title, author, pages, hasRead);
//     myLibrary.push(newBook);
//     return newBook;
// }
  

// const theHobbit = addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info());
// console.log(theHobbit.id);          
// console.log(myLibrary.length);

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;

  this.info = function() {
    const readStatus = this.hasRead ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };
}

// Sample book array
let library = [
  new Book("The Hobbit", "J.R.R. Tolkien", 295, false),
  new Book("1984", "George Orwell", 328, true),
  new Book("Dune", "Frank Herbert", 412, false)
];

// Display function
function displayBooks() {
  const libraryContainer = document.getElementById("library-container");
  libraryContainer.innerHTML = ""; // Clear existing content

  library.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.textContent = book.info();
    libraryContainer.appendChild(card);
  });
}

// Initial display
displayBooks();

const addBookToLibraryButton = document.getElementById('add-book');

// "Show the dialog" button opens the <dialog> modally
addBookToLibraryButton.addEventListener("click", () => {
  addBookDialog.showModal();
})

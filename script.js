const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  
    this.info = function() {
      const readStatus = this.hasRead ? "read" : "not read yet";
      return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
  }

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    return newBook;
}
  

const theHobbit = addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());
// Output: "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
console.log(theHobbit.id);          // Unique ID like "3f2c2f9e-87b6-4c85-91e3-9c6f2d4d41a2"
console.log(myLibrary.length);
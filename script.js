let bookIdCounter = 0;
function Book(title, author, pages, hasRead) {
  this.id = bookIdCounter++;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;

  this.info = function() {
    const readStatus = this.hasRead ? "Read" : "Not Read Yet";
    return `<br> by <br> ${this.author}, ${this.pages} pages, <br>${readStatus}<br>`;
  };
}

// Sample book array
let library = [
  new Book("The Hobbit", "J.R.R. Tolkien", 295, false),
  new Book("1984", "George Orwell", 328, true),
  new Book("Dune", "Frank Herbert", 412, false),
  new Book("Red Rabbit", "Tom Clancy", 636, true)
];

// Display function
function displayBooks() {
  const libraryContainer = document.getElementById("books");
  libraryContainer.innerHTML = ""; // Clear existing content
  library.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.setAttribute("data-book-id", book.id);

    // Card header with icon
    const header = document.createElement("div");
    header.className = "book-card-header";
    const icon = document.createElement("span");
    icon.className = "material-symbols-outlined";
    icon.textContent = "bookmark";
    header.appendChild(icon);
    card.appendChild(header);

    // Card body 
    const info = document.createElement("div");
    info.className = "book-info";
    const bookTitle = document.createElement("span");
    bookTitle.className = "book-title";
    bookTitle.textContent = book.title;
    bookTitle.style.fontSize = "1.5em";
    bookTitle.style.fontWeight = "bold";
    info.appendChild(bookTitle);
    info.innerHTML += book.info();
    card.appendChild(info);
    libraryContainer.appendChild(card);

    // Card footer
    const footer = document.createElement("div");
    footer.className = "book-card-footer";
    const formGroup = document.createElement("div");
    formGroup.className = "form-group";
    const label = document.createElement("label");
    label.textContent = "Read Status";
    label.htmlFor = `read-status-${book.title.replace(/\s+/g, '-')}`;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `read-status-${book.title.replace(/\s+/g, '-')}`;
    checkbox.checked = book.hasRead;

    // Change read status when checkbox is clicked
    checkbox.addEventListener("change", () => {
      book.hasRead = checkbox.checked;
      displayBooks();
    });

    const removeBook = document.createElement("div");
    removeBook.className = "remove-book";
    const removeBookBtn = document.createElement("a");
    removeBookBtn.className = "remove-book-btn";
    removeBookBtn.textContent = "Remove";
    const removeBookBtnIcon = document.createElement("span")
    removeBookBtnIcon.className = "material-symbols-outlined";
    removeBookBtnIcon.textContent = "remove";


    formGroup.appendChild(label);
    formGroup.appendChild(checkbox);
    removeBook.appendChild(removeBookBtnIcon);
    removeBook.appendChild(removeBookBtn);

    footer.appendChild(formGroup);
    footer.appendChild(removeBook);
    card.appendChild(footer);

    //Remove book event
    removeBook.addEventListener("click", () => {
      
      //Find index by id 
      const index = library.findIndex(b => b.id == book.id);
      if (index !== -1) {
        library.splice(index, 1);
        displayBooks();
      }
    });
  });
}

// Initial display
displayBooks();

const addBookToLibraryButton = document.getElementById('add-book');

// "Show the dialog" button opens the <dialog> modally
addBookToLibraryButton.addEventListener("click", () => {
  addBookDialog.showModal();
})


  const addBookToLibraryForm = document.getElementById('addBookToLibraryForm');
  addBookToLibraryForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get form values
  const title = addBookToLibraryForm.elements['title'].value;
  const author = addBookToLibraryForm.elements['author'].value;
  const pages = parseInt(addBookToLibraryForm.elements['pages'].value, 10);
  const hasRead = addBookToLibraryForm.elements['hasRead'].checked;

  // Create new Book and add to library
  const newBook = new Book(title, author, pages, hasRead);
  library.push(newBook);

  // Update display
  displayBooks();

  addBookToLibraryForm.reset();
  addBookDialog.close();
});




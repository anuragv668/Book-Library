const library = [];

function Book (title, author, pages = 0, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  if (read == true) {
    this.read = 'read';
  } else {
    this.read = "not read yet";
  }
  this.info = () => {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  library.push(new Book(title, author, pages, read));
}

function printLibrary (elembody) {
  for (let i = 0; i < library.length; i++) {
    let temp = document.createElement('div');
    temp.textContent = library[i].info();
    elembody.appendChild(temp);
  }
}

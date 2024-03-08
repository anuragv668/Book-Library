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

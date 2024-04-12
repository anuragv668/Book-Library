class Book {
  constructor(title, author, pages = 0, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read == true) {
      this.read = 'read';
    } else {
      this.read = "not read";
    }
  }
  info() {
    return `The ${this.title} by ${this.author}, ${this.pages} pages. `;
  }
}


// function Book (title, author, pages = 0, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   if (read == true) {
//     this.read = 'read';
//   } else {
//     this.read = "not read";
//   }
//   this.info = () => {
//     return `The ${this.title} by ${this.author}, ${this.pages} pages. `;
//   }
// }

const library = [];

function addBookToLibrary(title, author, pages, read) {
  library.push(new Book(title, author, pages, read));
}

function printLibrary (elembody) {

  while(elembody.firstChild) {
    elembody.removeChild(elembody.firstChild);
  }

  for (let i = 0; i < library.length; i++) {
    let libindex = library[i];
    let bookContainer = document.createElement('div');
    bookContainer.classList.add('listed');
    let temp = document.createElement('span');
    temp.textContent = libindex.info();
    bookContainer.appendChild(temp);

    let readbtn = document.createElement('button');
    readbtn.textContent = library[i].read;
    readbtn.onclick = () => {
      if (readbtn.textContent == 'read') {
        library[i].read = 'not read';
      } else {
        library[i].read = 'read';
      }
      readbtn.textContent = library[i].read;
    }
    bookContainer.appendChild(readbtn);

    let rmBtn = document.createElement('button');
    rmBtn.onclick = () => {
      library.splice(library.indexOf(libindex), 1);
      elembody.removeChild(bookContainer);
    }
    rmBtn.textContent = 'remove book';
    bookContainer.appendChild(rmBtn);
    elembody.appendChild(bookContainer);
  }
}

const openbtn = document.querySelector('.dialog-open');
const dialogbox = document.querySelector('dialog');
const closebtn = document.querySelector('.close');
const list = document.querySelector('.list');
const form = document.querySelector('form');

openbtn.addEventListener('click', () => {
  dialogbox.showModal();
});

closebtn.addEventListener('click', (e)=> {
  e.preventDefault();

  let arr = [];
  for (let i = 0; i < 4; i++) {
    if (i == 3) {
      arr.push(form[3].checked);
      break;
    }
    arr.push(form[i].value);
  }
  console.log(arr)
  addBookToLibrary(...arr);
  printLibrary(list);

  dialogbox.close();
});

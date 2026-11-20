/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 7: Constructor Functions and Classes - Task 2
  Student Name: sumit singh
  Roll Number: 2510303522
*/

class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return `${this.title} has ${this.pages} pages`;
    }
}

const book = new Book("Algorithms", 320);
console.log(book.summary());

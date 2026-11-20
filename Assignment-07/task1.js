/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 7: Constructor Functions and Classes - Task 1
  Student Name: sumit singh
  Roll Number: 2510303522
*/

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

const s1 = new Student("Asha", 88);
console.log(s1.name);
console.log(s1.marks);

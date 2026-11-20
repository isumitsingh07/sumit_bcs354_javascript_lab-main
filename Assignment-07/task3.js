/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 7: Constructor Functions and Classes - Task 3
  Student Name: sumit singh
  Roll Number: 2510303522
*/

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.result = function() {
    return this.marks >= 40 ? "Pass" : "Fail";
};

const s2 = new Student("Asha", 88);
console.log(s2.result());

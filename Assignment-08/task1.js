/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 8: Inheritance, Methods and Composition - Task 1
  Student Name: sumit singh
  Roll Number: 2510303522
*/

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

const teacher = new Teacher("Anita", "Maths");
console.log(teacher.greet());

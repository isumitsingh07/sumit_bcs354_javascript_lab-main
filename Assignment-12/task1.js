/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 12: Callbacks and Higher-Order Functions - Task 1
  Student Name: sumit singh
  Roll Number: 2510303522
*/

function applyTwice(fn, value) {
    return fn(fn(value));
}

function addTen(num) {
    return num + 10;
}

console.log(applyTwice(addTen, 5));

/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 11: Scope and Closures - Task 2
  Student Name: sumit singh
  Roll Number: 2510303522
*/

function makeCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());

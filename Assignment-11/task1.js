/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 11: Scope and Closures - Task 1
  Student Name: sumit singh
  Roll Number: 2510303522
*/

let level = "outer";

{
    let level = "inner";
    console.log(level);
}

console.log(level);

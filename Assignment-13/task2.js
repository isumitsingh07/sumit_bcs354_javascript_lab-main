/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 13: Reduce, Some, Every and Map - Task 2
  Student Name: sumit singh
  Roll Number: 2510303522
*/

const marks = [72, 85, 30, 90];

const anyBelow40 = marks.some(mark => mark < 40);
console.log(anyBelow40);

const allAtLeast35 = marks.every(mark => mark >= 35);
console.log(allAtLeast35);

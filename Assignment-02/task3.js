/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 2: Operators, Type Conversion and a Calculator - Task 3
  Student Name: sumit singh
  Roll Number: 2510303522
*/

function calculate(num1, num2, op) {
    if (op === "+") {
        console.log(num1 + num2);
    } else if (op === "-") {
        console.log(num1 - num2);
    }
}

let num1 = 8;
let num2 = 4;
let op = "+";
calculate(num1, num2, op);

op = "-";
calculate(num1, num2, op);

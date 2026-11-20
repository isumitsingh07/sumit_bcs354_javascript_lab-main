/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 15: Promises and async/await with Local Data - Task 2
  Student Name: sumit singh
  Roll Number: 2510303522
*/

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(120)
    .then(value => console.log(value))
    .catch(err => console.log(err.message));

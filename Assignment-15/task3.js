/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 15: Promises and async/await with Local Data - Task 3
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

async function run() {
    try {
        const m1 = await checkMarks(65);
        console.log(m1);
        const m2 = await checkMarks(-5);
        console.log(m2);
    } catch (error) {
        console.log("Caught: " + error.message);
    }
}

run();

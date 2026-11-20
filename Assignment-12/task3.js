/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 12: Callbacks and Higher-Order Functions - Task 3
  Student Name: sumit singh
  Roll Number: 2510303522
*/

function repeatAction(times, action) {
    for (let i = 1; i <= times; i++) {
        action(i);
    }
}

repeatAction(3, (round) => {
    console.log("Round " + round);
});

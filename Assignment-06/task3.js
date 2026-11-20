/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 6: JSON Text - Task 3
  Student Name: sumit singh
  Roll Number: 2510303522
*/

const invalidJson = "{name: Rohan}";

try {
    JSON.parse(invalidJson);
} catch (error) {
    console.log("Invalid JSON");
}

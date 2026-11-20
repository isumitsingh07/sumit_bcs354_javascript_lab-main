/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 9: DOM, Validation, Storage and Quiz - Task 3
  Student Name: sumit singh
  Roll Number: 2510303522
*/

// Simulating localStorage storage and retrieval in pure JavaScript
const mockLocalStorage = {};

function saveNote(note) {
    mockLocalStorage["note"] = note;
    console.log("Saved note to storage:", note);
}

function loadNote() {
    return mockLocalStorage["note"] || "";
}

saveNote("Study JavaScript for Semester Exams");
console.log("Loaded note from storage:", loadNote());

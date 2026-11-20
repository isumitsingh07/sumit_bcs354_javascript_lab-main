/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 15: Promises and async/await with Local Data - Task 4
  Student Name: sumit singh
  Roll Number: 2510303522
*/

function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: "Asha" },
                { id: 2, name: "Rohan" },
                { id: 3, name: "Meera" }
            ];
            resolve(users);
        }, 100);
    });
}

async function displayUsers() {
    const users = await getUsers();
    users.forEach(user => {
        console.log(user.name);
    });
}

displayUsers();

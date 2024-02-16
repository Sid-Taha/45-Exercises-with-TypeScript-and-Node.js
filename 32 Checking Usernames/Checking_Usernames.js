"use strict";
//Written by: Taha Ahmed
// Roll No. : 00298983
// current_users array
const current_users = ['Taha', 'Mariam', 'Arif', 'Bilal', 'Dawood'];
// new_users array
const new_users = ['Mariam', 'Bilal', 'Jameel', 'Salman', 'Dawood'];
// Loop through new_users list
for (let new_user of new_users) {
    // Convert new_user to lowercase for case insensitivity
    const lowercase_new_user = new_user.toLowerCase();
    // Checking username already exists in current_users or not
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        // Username already exists
        console.log(`The username '${new_user}' is not available. Please choose a different username.`);
    }
    else {
        // Username is available
        console.log(`The username '${new_user}' is available.`);
    }
}

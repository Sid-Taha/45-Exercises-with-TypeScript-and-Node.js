"use strict";
//Written by: Taha Ahmed
// Roll No. : 00298983
// array for usernames
const usernames = ['admin', 'Junaid', 'Zeeshan', 'Kamran', 'Daniyal'];
// using forEach method
usernames.forEach(username => {
    // Step 3: Inside the loop, special greeting for 'admin', For Others printing a Simple greeting
    if (username.toLowerCase() === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});

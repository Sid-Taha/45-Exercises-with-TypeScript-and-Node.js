"use strict";
//Written by: Taha Ahmed
// Roll No. : 00298983
// array for usernames
let usernames = ['admin', 'Junaid', 'Zeeshan', 'Kamran', 'Daniyal'];
// Checking User Availiblity 
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Removimg all usernames from the array
    usernames = [];
    console.log("All usernames have been removed. " + usernames.length);
}

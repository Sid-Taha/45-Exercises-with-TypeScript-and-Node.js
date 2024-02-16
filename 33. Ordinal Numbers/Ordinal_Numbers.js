"use strict";
//Written by: Taha Ahmed
// Roll No. : 00298983
// numbers from 1 to 9.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// using a for loop.
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    let ordinalEnding;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    // Printing Answaere
    console.log(`${number}${ordinalEnding}`);
}

"use strict";
//Written by: Taha Ahmed
// Roll No. : 00298983
// Array magicians
const magicians = ["Mariyam", "Harry Potter", "Sam", "Bilal"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
make_great(magicians);
show_magicians(magicians);

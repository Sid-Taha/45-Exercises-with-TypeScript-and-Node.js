"use strict";
//Written by: Taha Ahmed
// Roll No. : 00298983
function makeSandwich(items) {
    console.log("Making a sandwich with:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!\n");
}
makeSandwich(["Ham", "Cheese", "Lettuce"]);
makeSandwich(["Turkey", "Bacon"]);
makeSandwich(["Peanut Butter", "Jelly"]);

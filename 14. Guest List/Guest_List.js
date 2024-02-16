"use strict";
// let Guest_List :string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }
let Guest_List = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
Guest_List.splice(2, 1, 'Taha');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!');
}

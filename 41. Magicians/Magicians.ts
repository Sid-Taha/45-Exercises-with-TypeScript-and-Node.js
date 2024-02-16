//Written by: Taha Ahmed
// Roll No. : 00298983

// Array magicians
const magicians: string[] = ["Mariyam", "Harry Potter", "Sam", "Bilal"];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);

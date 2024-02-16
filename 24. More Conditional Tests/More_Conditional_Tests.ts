//Written by: Taha Ahmed
//DATE: 16-2-24

// Equality Inequality Test
console.log("Equality test with strings:", ("apple" as string) === "apple"); 
console.log("Inequality test with strings:", ("apple" as string) !== "orange"); 

// Testing lowercase function
console.log("Lowercase function test:", "HELLO".toLowerCase() === "hello"); 

// Buhut Sare Tests 
console.log("Equality test with numbers:", 5 === 5); //equality
console.log("Inequality test with numbers:", (10 as number) !== 5); //inequality
console.log("Greater than test:", 10 > 5); //greater than
console.log("Less than test:", 5 < 10);//less than
console.log("Greater than or equal to test:", 10 >= 10);//greater than or equal to
console.log("Less than or equal to test:", 5 <= 10);//less than or equal to

// Tests of "and" and "or"
console.log("And operator test:", true && true); 
console.log("Or operator test:", true || false);

// Test whether an item is in an array
const fruits :string[] = ["Nashpati", "Banana", "Amrood"];
console.log("Test 'Nashpati' in the array:", fruits.includes("Nashpati")); // Hope You dont mind. Include ka Array Func use kiya he.

// Test whether an item is not in an array
console.log("Testing 'Tarbooz' is not in array:", !fruits.includes("Tarbooz")); //  Answere true and chahiye.

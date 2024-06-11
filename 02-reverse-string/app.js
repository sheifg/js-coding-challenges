// JS-CC-02: Reverse String
// Purpose of the this coding challenge is to write a code that given a string , returns reverse of it.

// Problem Statement
// Write a code that takes a string and reverses the letters in place.

// Examples:
// reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC
// reverse("Happy") ➞ yppaH


const str = "Clarusway Rocks!";

let reverseString = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverseString += str[i];
}

console.log(reverseString);



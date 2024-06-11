// JS-CC-01: Operators
// Purpose of the this coding challenge is to practice on JS operators

// Problem Statement

// 1. What is the output?

// console.log(2 && 3)
// console.log(2 || 3)

// let x;
// let y = x || 22
// console.log(y)

// console.log(x && "Text")
// x = 10
// console.log(x && "Text")

console.log(2 && 3)       // True and true --> 3
console.log(2 || 3)       // True or true --> 2

let x;
let y = x || 22
console.log(y)            // false or true --> 22

console.log(x && "Text")  // false and true --> undefined
x = 10
console.log(x && "Text")  // true and true --> "Text"


// 2. Write a JavaScript program to determine a year is a leap year in the Gregorian calendar.
// (Please search the conditions for the leap year)

let year = +prompt("Enter a year");
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(`The ${year} year is a leap year`);
        }
        else {
            console.log(`The ${year} year is not a leap year`);
        }
    }
    else {
        console.log(`The ${year} year is a leap year`);
    }
}
else {
    console.log(`The ${year} year is  not a leap year`);
}


// 3. Write a JavaScript code to find the area of a triangle.

let a = 3;
let b = 4;
let c = 5;
let s = ((a + b + c) / 2);
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(`The area is ${area}`);   //The area is 6


// 4. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit

let temperature = +prompt("Enter a temperature number");
let unit = prompt("Enter C or F");
if (unit.toUpperCase() == "C") {
    let fahrenheit = ((9 * temperature) + (32 * 5)) / 5;
    console.log(`The temperature in fahrenheit is ${fahrenheit} F`);
}
else if (unit.toUpperCase() == "F") {
    let celsius = ((5 * (temperature - 32)) / 9);
    console.log(`The temperature in celsius is ${celsius} C`);
}
else {
    console.log("Invalid entry")
}

// JS-CC-05 : Reverse Words
// Purpose of the this coding challenge is to write a code that given a string , returns reverse order of words.

// Problem Statement
// Write a function that takes an array of characters and reverses the words order.
// Please note that, single word should not be reversed!
// Please take a look at the empty function and test code below:

// function reverseWords(message) {
// Write your code here    
// }

// Samples:
const input1 = "impossible. mean not does hard but hard, be to going It’s";
// expected = "It’s going to be hard, but hard does not mean impossible."

const input2 = "done. you’re when Stop tired. you’re when stop Don’t";
// expected = "Don’t stop when you’re tired. Stop when you’re done."



function reverseWords(message) {
    return message.split(" ").reverse().join(" ");
}

console.log(reverseWords(input1));
console.log(reverseWords(input2));

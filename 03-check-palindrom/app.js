// JS-CC-03: Check Palindrome
// Purpose of the this coding challenge is to write a code that checks whether a string is palindromic or not.

// What is palindrome?
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, and the sentence: "A man, a plan, a canal – Panama".

// Problem Statement
// Take an input.
// Check that input whether it is palindromic or not:
  // if palindromic then console log that it is palindromic
  // if not palindromic then console log that it is not palindromic


const word = "madam";

let isPalindrome = "";

for (let i = word.length - 1; i >= 0; i--) {
  isPalindrome += word[i];
}

if (isPalindrome === word) {
  console.log("This word is palindrome");
} else {
  console.log("This word is not palindrome");
}
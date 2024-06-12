// JS-CC-04: Count Digits

// Problem Statement
// Write a code to check how many times a digit appears inside of a given number 

const number = 122237894;

function findCount(number, search) {

  const str = number.toString();
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    if (search === +str[i]) {
      total++;
    }
  }

  return total;
}

console.log(findCount(number, 2));


// ********************************************************************


// Suppose we have an integer d between 0 and 9, we also have two positive integers low and high as lower and upper bounds, respectively. We have to find the number of times that d occurs as a digit in all integers between low and high, including the bounds low and high.
// For example, d=2, low= 10, high = 23 then the output will be 6, as digit d = 2 occurs 6 times: 12, 20, 21, 22, 23.

// Problem Statement
// Write a function that takes a 3 parameters: a digit, lower and upper bounds as integer. The function will calculate how many times the given digit occurs within the numbers including lower and upper bounds.
// Please solve the problem for 0 <= digit < 10 and 0 < low < high, otherwise function should return -1.
// If no occurrences is found in the given range, function should return 0.


function countDigits(digit, low, high) {
  let integersStr = "";
  let total = 0;
  if ((0 <= digit && digit < 10) && (0 < low && low < high)) {
    for (let i = low; i <= high; i++) {
      integersStr = integersStr + i;
    }

    for (let i = 0; i < integersStr.length; i++) {
      if (digit === +integersStr[i]) {
        total++;
      }
    }
    return total;
  }
}

console.log(countDigits(2, 10, 23));
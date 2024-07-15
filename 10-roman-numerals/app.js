
// JS-CC-10 : Roman Numerals
// Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

// Example:

// 1000=M 900=CM 90=XC

// 2008 is written as MMVIII:

// 2000=MM 8=VIII


// Problem Statement
// Write a function that takes normal number( 8, 148, 457 ) and convert to Roman Numerals( VIII, CXLVIII, CDLVII )

// Please note that, there is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

// function numberToRomanNumerals(numbers) {

// }



const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];


function numberToRomanNumerals(num) {
    if (isNaN(num)) {
        return '';
    }
    let romanNumeral = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            romanNumeral += romanNumerals[i].numeral;
            num -= romanNumerals[i].value;
        }
    }
    return romanNumeral;
}

console.log(numberToRomanNumerals(8));    // "VIII"
console.log(numberToRomanNumerals(148));  // "CXLVIII"
console.log(numberToRomanNumerals(457));  // "CDLVII"
console.log(numberToRomanNumerals(9));    // "IX"
console.log(numberToRomanNumerals(1054)); // "MLIV"
console.log(numberToRomanNumerals(1989)); // "MCMLXXXIX"
console.log(numberToRomanNumerals(3999)); // "MMMCMXCIX"


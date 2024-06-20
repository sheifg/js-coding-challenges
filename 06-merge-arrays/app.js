// JS-CC-06: Merge Arrays
// Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

// Problem Statement
// Write a function that takes two arrays consist of numbers and combines them into one sorted array as result.
// Please note that, empty arrays to be checked to avoid exception!

// Please take a look at the empty function:

// function mergeArrays(ArrayA, ArrayB) {
// Write your code to combine the sorted arrays into sorted Result Array
// }

// Samples:
const array1 = [];
const array2 = [7, 8, 9];
// expected_result = [7, 8, 9];

const array3 = [12, 14, 16];
const array4 = [11, 13, 17];
// expected_result = [11, 12, 13, 14, 16, 17];

const array5 = [22, 24, 26, 28];
const array6 = [21, 27];
// expected_result = [21, 22, 24, 26, 27, 28];



function mergeArrays(arrayA, arrayB) {
    return arrayA.concat(arrayB).sort();
}

console.log(mergeArrays(array1, array2));
console.log(mergeArrays(array3, array4));
console.log(mergeArrays(array5, array6));
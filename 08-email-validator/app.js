// JS-CC-08 : Email Validator
// The purpose of this coding challenge is to create a function that will check the given email address valid or not.

// Problem Statement:
// Write a function that takes email variable and return true or false and write console invalid or valid.

// Valid characters in the email address will be 'abcdefghijklmnopqrstuvwxyz0123456789_+.@' P.S. : Capital letters are allowed.

// An email should not start with '@' symbol and should not contain more than one '@' sign.

// There should be at least two characters after the '.' sign. (like .co or .com)

// There should be at least one '. after the '@' sign.

const abcString = "abcdefghijklmnopqrstuvwxyz0123456789_+.@";
let abcArr = abcString.split("");
// console.log(abcArr);
function emailValidator(email) {

    // Check for invalid characters
    for (let char of email) {
        if (!abcArr.includes(char.toLowerCase())) {
            console.log("❌ Invalid characters used");
            return false;
        }
    }

    // Check if the email starts with '@'
    if (email.startsWith("@")) {
        console.log("❌ Email should not start with '@' symbol");
        return false;
    }

    // Check if the email contains more than one '@' sign
    // Checking if the index position of @ is the same with indexOf and lastIndexOf
    if (email.indexOf("@") !== email.lastIndexOf("@")) {
        console.log("❌ Email should contain only one '@' sign");
        return false;
    }

    // Check if there is at least one '.' after the '@' sign in the domain part
    // Taking the two parts of the email before and after @. Accesing to the array position
    // const localPart = parts[0];
    // const domainPart = parts[1];

    // Using destructuring
    const [localPart, domainPart] = email.split("@");

    if (!domainPart.includes(".")) {
        console.log("❌ There should be at least one '.' after the '@' sign");
        return false;
    }
    const domainParts = domainPart.split(".");
    const lastPart = domainParts[1];

    // Check if there are at least two characters after the "." sign
    if (lastPart?.length < 2 || lastPart === undefined) {
        console.log(
            "❌ There should be at least two characters after the '.' sign"
        );
        return false;
    }
    // If all checks passed
    console.log("🆗 Valid");
    return true;
}

console.log(emailValidator("name.last_Name@company.com"));     // 🆗 Valid
console.log(emailValidator("name.143@company.co"));            // 🆗 Valid
console.log(emailValidator("name.last-Name@company.com"));     // ❌ Invalid characters used
console.log(emailValidator("name.last_Name@company.c"));       // ❌ There should be at least two characters after the '.' sign
console.log(emailValidator("name.last_Name@company"));         // ❌ There should be at least one '.' after the '@' sign




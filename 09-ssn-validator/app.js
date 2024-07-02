// JS-CC-009 : SSN (Social Security Number) Validator
// The purpose of this coding challenge is to create a function that will check the given SSN (Social Security Number) is valid or not valid.

// Problem Statement:
// Valid a SSN (Social Security Number);

// should have 9 digits. 522-82-5151
// should be divided into 3 parts by hyphen (-).
// The first part should have 3 digits and should not be 000, 666, or between 900 and 999.
// The second part should have 2 digits and it should be from 01 to 99.
// The third part should have 4 digits and it should be from 0001 to 9999.

function ssnValidator(ssn) {
  console.log(ssn);
  if (ssn.length !== 11) {
    console.log("❌ there should be 11 elements");
    return false;
  }

  // If the char is not a number or ther char is not a - in position 4 or position 7 -> return false

  for (let i = 0; i < ssn.length; i++) {
    if (ssn[i] < 0 || ssn[i] > 9 || (ssn[i] === "-" && i !== 3 && i !== 6)) {
      console.log(
        "❌ there should be 9 digits and should be divided into 3 parts by hyphen in position 3 and 6 (-)"
      );
      return false;
    }
  }
  const ssnArr = ssn.split("-");
  if (
    ssnArr[0] == 000 ||
    ssnArr[0] == 666 ||
    ssnArr[0] == 900 ||
    ssnArr[0] == 999
  ) {
    console.log(
      "❌ the first part should have 3 digits and should not be 000, 666, or between 900 and 999."
    );
    return false;
  }
  if (ssnArr[1] == 00) {
    console.log(
      "❌ the second part should have 2 digits and it should be from 01 to 99."
    );
    return false;
  }
  if (ssnArr[2] == 0000) {
    console.log(
      "❌ the third part should have 4 digits and it should be from 0001 to 9999."
    );
    return false;
  }
  // If all checks pass
  console.log("🆗 Valid");
  return true;
}

console.log(ssnValidator("268-26-3556"));
console.log(ssnValidator("237-86-9532"));
console.log(ssnValidator("304-92-5339"));
console.log(ssnValidator("510-72-0765"));
console.log(ssnValidator("504-58-0987"));
console.log(ssnValidator("999-589-987")); // false
console.log(ssnValidator("999-58-0987")); // false
console.log(ssnValidator("000-12-3456")); // false
console.log(ssnValidator("666-45-6789")); // false
console.log(ssnValidator("900-12-3456")); // false
console.log(ssnValidator("123-00-6789")); // false
console.log(ssnValidator("123-45-0000")); // false
console.log(ssnValidator("123456789")); // false
console.log(ssnValidator("123-45-678")); // false
console.log(ssnValidator("12-345-6789")); // false
console.log(ssnValidator("123-456-789")); // false

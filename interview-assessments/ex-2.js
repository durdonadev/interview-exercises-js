// Your Create a function, it takes a string. It would consist only digits and letters, both, or one of them. They will in order, it means, you will not mixed ones: X12X
// Output XXXX1234567

// Input. 123 => ZZZZ1230000
// Input. A => ZZZA0000000
// Input. B12 => ZZZB1200000
// Input AB => ZZAB0000000
// Input AAB123 => ZAAB1230000

function transformString(inputStr) {
    let outputStr = "ZZZZ0000000";

    if (inputStr) {
        outputStr = inputStr;

        // Count the number of digits and letters in the input string
        let numDigits = 0;
        let numLetters = 0;

        for (let i = 0; i < inputStr.length; i++) {
            const char = inputStr[i];
            if (char >= "0" && char <= "9") {
                numDigits++;
            } else if (
                (char >= "a" && char <= "z") ||
                (char >= "A" && char <= "Z")
            ) {
                numLetters++;
            }
        }

        // Calculate the number of 'Z's required
        const numZ = 4 - numLetters;

        // Add 'Z's at the beginning of the string
        let zString = "";
        for (let i = 0; i < numZ; i++) {
            zString += "Z";
        }

        const numZero = 7 - numDigits;
        let zeroString = "";
        for (let i = 0; i < numZero; i++) {
            zeroString += "0";
        }
        outputStr = zString + outputStr + zeroString;
    }

    return outputStr;
}

console.log(transformString("123")); // Output: "ZZZZ1230000"
console.log(transformString("A")); // Output: "ZZZA0000000"
console.log(transformString("B12")); // Output: "ZZZB1200000"
console.log(transformString("AB")); // Output: "ZZAB0000000"
console.log(transformString("AAB123")); // Output: "ZAAB1230000"

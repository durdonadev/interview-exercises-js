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
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const digits = "0123456789";
        let letterCount = 0;
        let digitCount = 0;
        for (const char of outputStr) {
            if (letters.includes(char)) {
                letterCount++;
            }
            if (digits.includes(char)) {
                digitCount++;
            }
        }
        const zNum = 4 - letterCount;
        let zString = "";
        for (let i = 0; i < zNum; i++) {
            zString += "Z";
        }

        const zeroNum = 7 - digitCount;
        let zeroString = "";
        for (let i = 0; i < zeroNum; i++) {
            zeroString += "0";
        }
        outputStr = zString + inputStr + zeroString;
    }

    return outputStr;
}

console.log(transformString("123")); // Output: "ZZZZ1230000"
console.log(transformString("A")); // Output: "ZZZA0000000"
console.log(transformString("B12")); // Output: "ZZZB1200000"
console.log(transformString("AB")); // Output: "ZZAB0000000"
console.log(transformString("AAB123")); // Output: "ZAAB1230000"

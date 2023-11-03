// Develop a function that determines if two strings are anagrams of each other. Return true if anagrams, else false.

// e.g ("secure", "rescue")

// secure   =>  rescue

//HELLO, ELLOH
// APPLE, LEAPP
// PULLS, PULLR

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    str1Count = {};
    str2Count = {};

    for (const char of str1) {
        if (str1Count[char]) {
            str1Count[char]++;
        } else {
            str1Count[char] = 1;
        }
    }

    for (const char of str2) {
        if (str2Count[char]) {
            str2Count[char]++;
        } else {
            str2Count[char] = 1;
        }
    }

    for (const char in str1Count) {
        if (str1Count[char] !== str2Count[char]) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram("secure", "rescue"));

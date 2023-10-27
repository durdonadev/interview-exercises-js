// Create a function that takes an array of numbers, and target number. Check if two numbers can be added and get the target sum. Do not use nested arrays, includes, indexOf methods. Use objects.

// [1, 4, 5, 7], 8 => true
// [1, 3, 7, 8, 0, 4], 7 => true

const checkSum = (arr, target) => {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        const difference = target - arr[i];

        if (obj[difference]) {
            return true;
        }
        obj[arr[i]] = true;
    }
    return false;
};

console.log(checkSum([1, 4, 5, 7], 8)); // true
console.log(checkSum([1, 4, 5, 6], 12)); // false
console.log(checkSum([1, 3, 7, 8, 0, 4], 7)); // true
console.log(checkSum([1, 5, 5, 7], 10)); // true

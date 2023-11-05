// Given an number of  array. Linear array.
// [1,2,4,5,6,7,8] => 3
// [1,2,3,....., 67,68,70.....100] => 69.
// Numbers are are always positive.

const missingNum = (nums) => {
    let count = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === count) {
            count++;
        }
        if (count === nums.length + 1) {
            count = 0;
        }
    }
    return count;
};

const getMissingNum = (nums) => {
    const n = nums.length + 1;
    let expectedSum = (n * (n + 1)) / 2;

    let sum = nums.reduce((acc, num) => (acc += num), 0);
    let missingNumber = expectedSum - sum;

    if (missingNumber === n) {
        missingNumber = 0;
    }

    return missingNumber;
};

console.log(getMissingNum([1, 2, 4, 5])); // 3
console.log(getMissingNum([2, 3, 4, 5, 6, 7, 8, 9, 10])); // 1
console.log(getMissingNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 0

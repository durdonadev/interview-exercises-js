// Input [1, 6, 3, 9, 0, -10, 100]
// [100, 9]
// Create a function that takes an array of numbers. Return two largest one in array [firstLargest, secondLargest];

const twoMax = (nums) => {
    let max = nums[0];
    let secondMax = nums[0];

    for (const num of nums) {
        if (num > max) {
            max = num;
        }
    }
    for (const num of nums) {
        if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }

    return [max, secondMax];
};

console.log(twoMax([1, 6, 3, 9, 0, -10, 100]));

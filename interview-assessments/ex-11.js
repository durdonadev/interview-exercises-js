// Given a number. Sum up the digits
// 1234 => 10
// 4589 => 26
// 8978 => 32.
// COndition : Do not convert number to string and loop.

const sumUpDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
};

console.log(sumUpDigits(1234));
console.log(sumUpDigits(4589));
console.log(sumUpDigits(8978));

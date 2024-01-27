function add(x, y) {
    if (arguments.length === 2) {
        return x + y;
    } else if (arguments.length === 1) {
        return function (y) {
            return x + y;
        };
    }
}

console.log(add(2, 5));
console.log(add(2)(5));

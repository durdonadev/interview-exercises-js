// Input {} => Valid
// Input {{{}}{}} => Valid
// Input { => Not Valid
// Input } => Not Valid
// Input {{}}{ => Not Valid
// Input '' => Not Valid

// Create a Function that takes braces as string, and returns true if braces are valid, otherwise false.

// Hint. Use Array, push, and pop methods

const isValidCurlyBraces = (braces) => {
    if (braces.length % 2 !== 0) {
        return false;
    }

    const open = "{";
    const close = "}";
    const stack = [];

    for (const brace of braces) {
        if (brace === open) {
            stack.push(open);
        } else if (brace === close) {
            if (stack.length === 0 || stack.pop() !== open) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValidCurlyBraces("{"));
console.log(isValidCurlyBraces("{}}"));
console.log(isValidCurlyBraces("{}"));
console.log(isValidCurlyBraces("{{{}}{}}"));

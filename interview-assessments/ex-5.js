// Valid ["<section>", "</section>", "<div>", "</div"]

// Not Valid ["<a>", "<div>", "</a>", "</div"]

// write a function, that takes an array of html tags. Return true if they have valid order and snytax.

const isOpeningTag = (tag) => {
    return tag[1] !== "/";
};

const convertToOpeningTag = (closingTag) => {
    return closingTag[0] + closingTag.slice(2);
};

const isValidHtmlTag = (tags) => {
    const stack = [];

    for (const tag of tags) {
        if (isOpeningTag(tag)) {
            stack.push(tag);
        } else {
            const lastTag = stack.pop();
            const openingTag = convertToOpeningTag(tag);

            if (lastTag !== openingTag) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValidHtmlTag(["<section>", "</section>", "<div>", "</div"]));
console.log(isValidHtmlTag(["<a>", "<div>", "</a>", "</div"]));
console.log(isValidHtmlTag(["<div>"]));
console.log(isValidHtmlTag(["</div>", "<>"]));
console.log(isValidHtmlTag(["<div>", "</div>"]));
console.log(isValidHtmlTag(["<div>", "</div>", "<div>"]));
console.log(isValidHtmlTag(["<div>", "</p>"]));

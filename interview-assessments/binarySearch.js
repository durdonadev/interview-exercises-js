const binarySearch = (arr, ele) => {
    let lowerBound = 0;
    let upperBound = arr.length - 1;

    while (lowerBound <= upperBound) {
        let midpoint = Math.floor((upperBound + lowerBound) / 2);
        let midpointValue = arr[midpoint];

        if (ele === midpointValue) {
            return midpoint;
        } else if (ele < midpointValue) {
            upperBound = midpoint - 1;
        } else if (ele > midpointValue) {
            lowerBound = midpoint + 1;
        }
    }

    return -1; // Return -1 if the element is not found in the array
};

console.log(binarySearch([1, 2, 3, 4, 5], 4));

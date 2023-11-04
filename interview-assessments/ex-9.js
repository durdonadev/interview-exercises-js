// // Create a function that takes two sorted array (asc) with the same length. Merge them in one array and return it. Catch is here: returning array should be sorted as well. do not use sort() method.
// [1, 4, 6, 10, 100], [3, 4, 10, 12, 101]
// [1, 3, 4, 4, 6, 10, 10, 12, 100, 101 ]

const sortedArray = (arr1, arr2) => {
    const sortArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length) {
        if (arr1[i] < arr2[j]) {
            sortArr.push(arr1[i]);
            i++;
        } else {
            {
                sortArr.push(arr2[j]);
                j++;
            }
        }
    }
    return sortArr;
};

console.log(sortedArray([1, 4, 6, 10, 100], [3, 4, 10, 12, 101])); // [1, 3, 4, 4, 6, 10, 10, 12, 100, 101 ]

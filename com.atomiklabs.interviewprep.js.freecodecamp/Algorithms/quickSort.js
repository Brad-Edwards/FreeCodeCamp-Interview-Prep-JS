// quickSort.js

module.exports = {
    tests: function () {
        return testAlgorithm();
    }
}

/*
 * Sorts an array using the quick sort algorithm
 * Param: array - The array to sort
 * Returns: The sorted array
 * Remarks: I initially tried to implement this with array.forEach, forgot 
 * to include the index parameter, and had to scrap it and use a for loop. 
 * Then I realized my mistake and used the forEach with the param. Small 
 * oversight.
 */
function quickSort(array) {
    // base case
    if (array.length <= 1) {
        return array;
    }

    // Pivot as an array to also hold element equal to the pivot
    let pivot = [];
    pivot.push(array[0]);
    let left = [];
    let right = [];
    array.forEach(function (element, index) {
        // Exclude the pivot or we get an additional copy of it, but
        // take other duplicates
        if (element === pivot[0] && index > 0) {
            pivot.push(element);
        } else if (element < pivot[0]) {
            left.push(element);
        } else if (element > pivot[0]) {
            right.push(element);
        }
    });
    
    left = quickSort(left);
    right = quickSort(right);
    let result = left;
    result.push(...pivot);
    result.push(...right);
    return result;
}

/*
 * Tests quickSort
 * Returns: Error or success messages
 * Remarks: I initially tried t
 */
function testAlgorithm() {
    let messages = [];

    let cases = [
        {
            values: [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92],
            expected: [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643],
        },
    ];
 
    let utilities = require('../utilities');

    for (let i = 0; i < cases.length; i++) {
        let result = quickSort(cases[i].values);
        if (!utilities.areEquals(result, cases[i].expected)) {
            messages.push(`quickSort(${cases[i].values}) expected ${cases[i].expected} ` +
                `but result was ${result}\n`);
        }
    }

    if (messages.length === 0) {
        messages.push("All tests passed.");
    }

    return messages;
}
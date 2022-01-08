// selectionSort.js

module.exports = {
    tests: function () {
        return testAlgorithm();
    }
}

/*
 * Sorts an array using the selection sort algorithm
 * Param: array - The array to sort
 * Returns: The sorted array
 * Remarks: Took a little while because I initially forgot to adjust for the 
 * progressive changes in array lengths for indexing back into the original array. 
 * But worked it out without external references.
 */
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let newArray = array.slice(i,);
        let min = Math.min(...newArray);
        // Indexes will be same first iteration, progressively different after
        let index = newArray.indexOf(min) + array.length - newArray.length;
        let temp = array[i];
        array[i] = array[index];
        array[index] = temp;
    }
    return array;
}

/*
 * Tests selectionSort
 * Returns: Error or success mesages from tests
 */
function testAlgorithm() {
    let messages = [];

    let cases = [
        {
            values: [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92],
            expected: [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]
        }
    ];

    let utilities = require('../utilities');

    for (let i = 0; i < cases.length; i++) {
        let result = selectionSort(cases[i].values);
        if (!utilities.areEquals(result, cases[i].expected)) {
            messages.push(`selectionSort(${cases[i].values}\nExpected: ${cases[i].expected}\n` +
                `Result: ${result}\n`);
        }
    }

    if (messages.length === 0) {
        messages.push("All tests passed.");
    }

    return messages;
}
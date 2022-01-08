// insertionSort.js

module.exports = {
    tests: function () {
        return testAlgorithm();
    }
}

/*
 * Sorts an array using the insertion sort algorithm
 * Param: array - The array to sort
 * Returns: The sorted array
 * Remarks: For whatever reason I found this one easy to do, at least non-recursively.
 */
function insertionSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        let check = i;
        let currentPos = i + 1;
        while (check >= 0 && array[check] > array[currentPos]) {
            let temp = array[check];
            array[check] = array[currentPos];
            array[currentPos] = temp;
            check--;
            currentPos--;
        }
    }
    return array;
}

/*
 * Tests insertionSort
 */
function testAlgorithm() {
    let messages = []

    // From FreeCodeCamp
    let cases = [
        {
            values: [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92],
            expected: [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]
        },
        {
            values: [5, 4, 33, 2, 8],
            expected: [2, 4, 5, 8, 33],
        }
    ];

    let utilities = require('../utilities');

    for (let i = 0; i < cases.length; i++) {
        let result = insertionSort(cases[i].values);
        if (!utilities.areEquals(result, cases[i].expected)) {
            messages.push(`insertionSort(${cases[i].values})\nExpected: ${cases[i].expected}\n` +
                `Result: ${reslut}\n`);
        }
    }

    if (messages.length === 0) {
        messages.push("All tests passed.");
    }

    return messages;
}
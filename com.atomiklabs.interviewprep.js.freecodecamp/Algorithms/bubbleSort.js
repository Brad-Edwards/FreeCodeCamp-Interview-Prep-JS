// bubbleSort.js

module.exports = {
    tests: function () {
        return testAlgorithm();
    }
}

/*
 * Sorts an array using the bubble sort algorithm
 * Param: arr - The array to sort
 * Returns: The sorted array
 * Remarks: This one was pretty easy, I just implemented it from the 
 * description in the exercise.
 */
function bubbleSort(arr) {
    // Loop until no more sorts are made
    while (true) {
        let swaps = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swaps = true;                
            }
        }
        if (!swaps) break;
    }
    return arr;
}

/*
 * Tests bubbleSort
 * Returns: Error or success messages from tests
 */
function testAlgorithm() {
    let messages = [];

    // From FreeCodeCamp
    let cases = [
        {
            values: [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92],
            expected: [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]
        },
    ];

    let utilities = require('../utilities');
    
    for (let i = 0; i < cases.length; i++) {
        let result = bubbleSort(cases[i].values);
        if (!utilities.areEquals(result, cases[i].expected)) {
            messages.push(`bubbleSort(${cases[i].values}\nExpected: ${cases[i].expected}\n` +
                `Result: ${result}\n`);
        }
    }

    if (messages.length === 0) {
        messages.push("All tests passed.");
    }

    return messages;
}
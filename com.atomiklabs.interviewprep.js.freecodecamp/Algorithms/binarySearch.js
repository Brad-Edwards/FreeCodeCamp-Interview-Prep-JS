// binarySearch.js

module.exports = {
    tests: function() {
        return testAlgorithm();
    }
}

/*
 * Searches a sorted array using the binary search algorithm and
 * returns an array of middle values used in the search
 * Param: array - The sorted array to search
 * Param: value - Value to find
 * Returns: The values on the path to the target value, or an error
 * message
 * Remarks: I could not remember this algorithm from my data structures
 * course so I had to look it up and implement it from pseudo code.
 */
function binarySearch(array, value) {
    let path = [];
    let lower = 0;
    let upper = array.length - 1;
    while (lower <= upper) {
        let mid = Math.floor((lower + upper) / 2);
        path.push(array[mid]);
        if (array[mid] < value) {
            lower = mid + 1;
        } else if (array[mid] > value) {
            upper = mid - 1;
        } else {
            return path;
        }
    }
    return "Value Not Found";
}

/*
 * Tests binarySearch
 * Returns: Error or success messages
 */
function testAlgorithm() {
    let messages = [];

    let cases = [
        {
            values: 0,
            expected: [13, 5, 2, 0],
        },
        {
            values: 1,
            expected: [13, 5, 2, 0, 1],
        },
        {
            values: 2,
            expected: [13, 5, 2],
        },
        {
            values: 6,
            expected: "Value Not Found",
        },
        {
            values: 11,
            expected: [13, 5, 10, 11],
        },
        {
            values: 13,
            expected: [13],
        }
    ];

    let utilities = require('../utilities');
    let array = [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70];

    for (var i = 0; i < cases.length; i++) {
        let result = binarySearch(array, cases[i].values);
        if (cases[i].expected === "Value Not Found") {
            if (result !== cases[i].expected) {
                messages.push(`binarySearch(${cases[i].values})\nExpected: ${cases[i].expected}\n` +
                    `Result: ${result}\n`);
            }
        } else if (!utilities.areEquals(result, cases[i].expected)) {
            messages.push(`binarySearch(${cases[i].values})\nExpected: ${cases[i].expected}\n` +
                `Result: ${result}\n`);
        }
    }

    if (messages.length === 0) {
        messages.push("All tests passed.");
    }

    return messages;
}
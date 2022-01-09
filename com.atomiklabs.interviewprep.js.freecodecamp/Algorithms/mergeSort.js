// mergeSort.js

module.exports = {
    tests: function() {
        return testAlgorithm();
    }
}

/*
 * Sorts an array using the merge sort algorithm
 * Param: array - The array to sort
 * Returns: The sorted array
 */
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid, array.length));
    let i = 0;
    let j = 0;
    let temp = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            temp.push(left[i]);
            i++;
        } else {
            temp.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        temp.push(left[i]);
        i++;
    }
    while (j < right.length) {
        temp.push(right[j]);
        j++;
    }

    return temp;
}

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
        let result = mergeSort(cases[i].values);
        if (!utilities.areEquals(result, cases[i].expected)) {
            messages.push(`mergeSort(${cases[i].values}\nExpected: ${cases[i].expected}\n` +
                `Result: ${result}\n`);
        }
    }

    if (messages.length === 0) {
        messages.push("All tests passed.");
    }

    return messages;
}
// pairwise.js

module.exports = {
    tests: function () {
        return testAlgorithm();
    }
}

/*
 * Finds the sum of the indices of pairs of elements that
 * sum to a target value without reusing elements.
 * Param: arr - An array of integers to test
 * Param: value - The target value for sums of elements
 * Returns: The sum of the indices of pairs of elements that
 * sum to the target value.
 */ 
function pairwise(arr, value) {
    let used = new Set();
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (used.has(i)) {
            continue;
        }
        for (var j = i + 1; j < arr.length; j++) {
            if (used.has(j)) {
                continue;
            }
            if (arr[i] + arr[j] === value) {
                used.add(i);
                used.add(j);
                sum += i + j;
                break;
            }
        }
    }
    return sum;
}

/*
 * Tests pairwise
 * Returns: Error or success messages
 */
function testAlgorithm() {
    let messages = [];

    // From FreeCodeCamp
    let cases = [
        {
            values: [[1, 4, 2, 3, 0, 5], 7],
            expected: 11,
        },
        {
            values: [[1, 3, 2, 4], 4],
            expected: 1,
        },
        {
            values: [[1, 1, 1], 2],
            expected: 1,
        },
        {
            values: [[0, 0, 0, 0, 1, 1], 1],
            expected: 10,
        },
        {
            values: [[], 100],
            expected: 0,
        }
    ];

    for (let i = 0; i < cases.length; i++) {
        let result = pairwise(...cases[i].values);
        console.log(result);
        if (result !== cases[i].expected) {
            messages.push(`pairwise(${cases[i].values[0]}, ${cases[i].values[1]})\n` +
                `Expected: ${cases[i].values[1]}\n` +
                `Result: ${result}`);
        }
    }

    if (messages.length === 0) {
        messages.push("All tests passed.");
    }

    return messages;
}
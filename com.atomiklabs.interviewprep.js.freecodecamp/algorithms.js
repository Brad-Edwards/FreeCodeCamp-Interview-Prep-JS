// algorithms.js
// Implementations and tests for FreeCodeCamp interview questions algorithms exercises

module.exports = {
    runAlgorithms: function () {
        console.log("*** Algorithms ***\n");

        // Symmetric Difference
        console.log("Symmetric Difference\n");
        let messages = testSymmetricDifference();
        messages.forEach(element => console.log(element));
        console.log("\n");
    }
}

// Symmetric Difference

/*
 * Produces the symmetric difference between pairs of sets of integers.
 * Returns: The symmetric difference of progressive binary comparisons of sets 
 *          of integers.
 */
function symmetricDifference(args) {
    // Set ground for first comparison
    let diff = [];
    for (var i = 0; i < args.length; i++) {
        // Find the elements of each set not in the other set
        var diff1 = args[i].filter(element => !diff.includes(element));
        var diff2 = diff.filter(element => !args[i].includes(element));
        // Clear out duplicates and prepare for next comparison or return
        diff = Array.from(new Set(diff1.concat(diff2))).sort();
    }
    return diff;
}

/*
 * Tests algorithms.symmetricDifference
 * Returns: error or success messages from tests
 */
function testSymmetricDifference() {
    let messages = [];

    // From FreeCodeCamp
    let cases = [
        {
            values: [[1, 2, 3], [5, 2, 1, 4]],
            expected: [3, 4, 5],
        },
        {
            values: [[1, 2, 3, 3], [5, 2, 1, 4]],
            expected: [3, 4, 5],
        },
        {
            values: [[1, 2, 3], [5, 2, 1, 4, 5]],
            expected: [3, 4, 5],
        },
        {
            values: [[1, 2, 5], [2, 3, 5], [3, 4, 5]],
            expected: [1, 4, 5],
        },
        {
            values: [[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]],
            expected: [1, 4, 5],
        },
        {
            values: [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]],
            expected: [2, 3, 4, 6, 7],
        },
        {
            values: [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]],
            expected: [1, 2, 4, 5, 6, 7, 8, 9],
        }
    ];

    for (var i = 0; i < cases.length; i++) {
        let result = symmetricDifference(cases[i].values);
        if (!areEquals(result, cases[i].expected)) {
            messages.push(`symmetricDifference(${cases[i].values}) expected ${cases[i].expected} ` +
                `but result was ${result}`);
        }
    }

    if (messages.length == 0) {
        messages.push("All tests passed.");
    }

    return messages;
}

// Utilities

/*
 * Performs a deep comparison of two arrays.
 * Returns: true if the arrays are equal, otherwise false
 */
function areEquals(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    return arr1.every((value, index) => value == arr2[index]);
}
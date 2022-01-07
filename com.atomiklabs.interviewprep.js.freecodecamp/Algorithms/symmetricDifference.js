// symmetricDifference.js

module.exports = {
    tests: function () {
        return testAlgorithm();
    }
}

/*
 * Produces the symmetric difference between pairs of sets of integers.
 * Returns: The symmetric difference of progressive binary comparisons of sets 
 *          of integers.
 * Remarks: This took longer than I would like to admit. I went too complex initially. 
 *          But this is my own implementation without looking at other sources.
 */
function symmetricDifference(args) {
    // Set ground for first comparison
    let diff = [];
    for (var i = 0; i < args.length; i++) {
        // Find the elements of each set not in the other set
        let diff1 = args[i].filter(element => !diff.includes(element));
        let diff2 = diff.filter(element => !args[i].includes(element));
        // Clear out duplicates and prepare for next comparison or return
        diff = Array.from(new Set(diff1.concat(diff2))).sort();
    }
    return diff;
}

/*
 * Tests symmetricDifference
 * Returns: error or success messages from tests
 */
function testAlgorithm() {
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

    let utilities = require('../utilities');

    for (let i = 0; i < cases.length; i++) {
        let result = symmetricDifference(cases[i].values);
        if (!utilities.areEquals(result, cases[i].expected)) {
            messages.push(`symmetricDifference(${cases[i].values}) expected ${cases[i].expected} ` +
                `but result was ${result}\n`);
        }
    }

    if (messages.length === 0) {
        messages.push("All tests passed.");
    }
    
    return messages;
}

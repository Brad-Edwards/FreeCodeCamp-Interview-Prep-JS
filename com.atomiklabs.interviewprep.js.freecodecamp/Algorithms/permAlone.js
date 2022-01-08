// permAlone.js

module.exports = {
    tests: function () {
        return testAlgorithm();
    }
}

/*
 * Finds all permutations of a string that do not have
 * repeated characters.
 * Param: str - The string to permute
 * Returns: The number of permutations that do not have
 * repeated characters.
 * Remarks: I struggled with this and ended up having to
 * do some research. I found pseudo-code for Heap's Algorithm
 * and implemented that.
 */
function permAlone(str) {
    let charArray = str.split("");
    let result = [];
    permute(charArray, charArray.length, charArray.length, result);
    return result.length;
}

/*
 * Generates all permutations without sequentially repeated 
 * characters from a character array.
 * Param: charArray - The array of characters to permute
 * Param: n - Size of the original character array
 * Param: k - Initial character for current permutation
 * Returns: nil
 */
function permute(charArray, n, k, result) {
    if (k === 1) {
        let perm = charArray.join("");
        if ((/(.)\1{1,}/).test(perm)) {
            return;
        } 
        result.push(perm);
    } else {
        permute(charArray, n, k-1, result);
        for (var i = 0; i < k - 1; i++) {
            let index = k % 2 === 0 ? i : 0;
            let temp = charArray[index];
            charArray[index] = charArray[k - 1];
            charArray[k - 1] = temp;
            permute(charArray, n, k-1, result);
        }
    }
}

/*
 * Tests permAlone
 * Returns: error or success messages
 */
function testAlgorithm() {
    let messages = [];

    // From FreeCodeCamp
    let cases = [
        {
            values: "aab",
            expected: 2
        },
        {
            values: "aaa",
            expected: 0
        },
        {
            values: "aabb",
            expected: 8
        },
        {
            values: "abcdefa",
            expected: 3600
        },
        {
            values: "abfdefa",
            expected: 2640
        },
        {
            values: "zzzzzzzz",
            expected: 0
        },
        {
            values: "a",
            expected: 1
        },
        {
            values: "aaab",
            expected: 0
        },
        {
            values: "aaabb",
            expected: 12
        }
    ];

    for (let i = 0; i < cases.length; i++) {
        let result = permAlone(cases[i].values);
        if (result !== cases[i].expected) {
            messages.push(`permAlone(${cases[i].values})\n`);
            messages.push(`Expected: ${cases[i].expected}\n`);
            messages.push(`Result: ${result}\n`);
        }
    }

    if (messages.length === 0) {
        messages.push("All tests passed.");
    }

    return messages;
}
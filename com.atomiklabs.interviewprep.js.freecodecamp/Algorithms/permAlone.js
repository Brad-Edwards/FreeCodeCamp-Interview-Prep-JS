// permAlone.js

module.exports = {
    tests: function () {
        return testAlgorithm();
    }
}

/*
 * Finds all permutations of a string that do not have
 * repeated characters.
 * Returns: The number of permutations that do not have
 * repeated characters.
 * Remarks: I struggled with this and ended up having to
 * do some research. I found pseudo-code for Heap's Algorithm
 * and implemented that.
 */
function permAlone(str) {
    let charArray = str.split("");
    let result = [];
    permute(charArray.length, charArray, result);
    return result.length;
}

function permute(k, str, result) {
    if (k === 1) {
        if ((/(.)\1{1,}/).test(str.toString())) {
            return;
        } else {
            result.push(str.toString());
            return;
        }
    } else {
        permute(k - 1, str, result);

        for (let i = 0; i < k - 1; i++) {
            if (k % 2 === 0) {
                let temp = str[i];
                str[i] = str[k - 1];
                str[k - 1] = temp;
            } else {
                let temp = str[0];
                str[0] = str[k - 1];
                str[k - 1] = temp;
            }
            permute(k - 1, str, result);
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
// inventoryUpdate.js

module.exports = {
    tests: function () {
        return testAlgorithm();
    }
}

/*
 * Updates existing inventory quantities in one array with the 
 * quantities in the second.
 * Params: arr1 - Current inventory as 2D array of [amount, item name]
 * Params: arr2 - Updatse to inventory as a 2D array of [amount, item name]
 * Returns: An updated inventory array.
 * Remarks: This was fairly straightforward, I was able to implement
 * it without needing any hints, beyond looking up JS syntax.
 */ 
function inventoryUpdate(arr1, arr2) {

    // Elements are story as [count, name]
    // Add current inventory into Map, but reverse element order so
    // it can be searched by item name for updating inventory counts
    let workingInv = new Map();
    arr1.forEach(element => workingInv.set(element[1], element[0]));
    // Update or add each item from inventory update
    arr2.forEach(function (element) {
        if (workingInv.has(element[1])) {
            workingInv.set(element[1], workingInv.get(element[1]) + element[0]);
        } else {
            workingInv.set(element[1], element[0]);
        }
    });
    // Sort and flip inventory item elements for comparison
    let inv = Array.from(workingInv).sort();
    var updatedInv = [];
    inv.forEach(element => updatedInv.push([element[1], element[0]]));
    return updatedInv;
}

/*
 * Tests inventoryUpdate
 * Returns: error or success messages from tests
 */
function testAlgorithm() {
    let messages = [];

    // From FreeCodeCamp
    let cases = [
        {
            inventory: [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
            update: [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]],
            expected: [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"],
            [5, "Microphone"], [7, "Toothpaste"]]
        },
        {
            inventory: [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
            update: [],
            expected: [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
        },
        {
            inventory: [],
            update: [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]],
            expected: [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]
        },
        {
            inventory: [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]],
            update: [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]],
            expected: [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"],
            [0, "Microphone"], [1, "Toothpaste"]]
        }
    ];

    let utilities = require('../utilities');

    for (let i = 0; i < cases.length; i++) {
        let result = inventoryUpdate(cases[i].inventory, cases[i].update);
        if(result.length !== cases[i].expected.length) {
            messages.push(`inventoryUpdate(${cases[i].inventory}, ${cases[i].update})\n`);
            messages.push(`Expected result length: ${cases[i].expected.length}\n`);
            messages.push(`Result length: ${result.length}\n\n`);
        }

        for (let j = 0; j < result.length; j++) {
            if (!utilities.areEquals(result[j], cases[i].expected[j])) {
                messages.push(`inventoryUpdate(${cases[i].inventory}, ${cases[i].update})\n`);
                messages.push(`Expected: ${cases[i].expected}\n`);
                messages.push(`Result: ${result}\n\n`);
            }
        }
    }

    if (messages.length === 0) {
        messages.push("All tests passed.");
    }

    return messages;
}
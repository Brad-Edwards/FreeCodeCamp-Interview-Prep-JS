// algorithms.js
// Runs the tests for algorithms exercises

module.exports = {
    runAlgorithms: function () {
        let messages = [];
        messages.push("*** Algorithms ***\n");

        // Symmetric Difference
        messages.push("-Symmetric Difference-\n");
        let symmetricMessages = require('./symmetricDifference').tests();
        symmetricMessages.forEach(element => messages.push(element));
        messages.push("\n");

        // Inventory Update
        messages.push("-Inventory Update-\n");
        let inventoryMessages = require('./inventoryUpdate').tests();        
        inventoryMessages.forEach(element => messages.push(element));
        messages.push("\n");

        // No Repeats Please (permAlone)
        messages.push("-No Repeats Please-\n");
        let repeatMessages = require('./permAlone').tests();
        repeatMessages.forEach(element => messages.push(element));
        messages.push("\n");

        // Pairwise
        messages.push("-Pairwise-\n");
        let pairwiseMessages = require('./pairwise').tests();
        pairwiseMessages.forEach(element => messages.push(element));
        messages.push("\n");

        // Bubble Sort
        messages.push("-Bubble Sort-");
        let bubbleMessages = require('./bubbleSort').tests();
        bubbleMessages.forEach(element => messages.push(element));
        messages.push("\n");

        // Report
        messages.forEach(element => console.log(element));
    }
}



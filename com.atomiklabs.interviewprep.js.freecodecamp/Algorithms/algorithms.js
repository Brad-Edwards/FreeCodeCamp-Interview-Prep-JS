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

        // Selection Sort
        messages.push("-Selection Sort-");
        let selectionMessages = require('./selectionSort').tests();
        selectionMessages.forEach(element => messages.push(element));
        messages.push("\n");

        // Insertion Sort
        messages.push("-Insertion Sort-");
        let insertionMessages = require('./insertionSort').tests();
        insertionMessages.forEach(element => messages.push(element));
        messages.push("\n");

        // Quick Sort
        messages.push("-Quick Sort-");
        let quickMessages = require('./quickSort').tests();
        quickMessages.forEach(element => messages.push(element));
        messages.push("\n");

        // Merge Sort
        messages.push("-Merge Sort-");
        let mergeMessages = require('./mergeSort').tests();
        mergeMessages.forEach(element => messages.push(element));
        messages.push("\n");
        
        // Binary Search
        messages.push("-Binary Search-");
        let binaryMessages = require('./binarySearch').tests();
        console.log(binaryMessages)
        binaryMessages.forEach(element => messages.push(element));
        messages.push("\n");

        // Report
        messages.forEach(element => console.log(element));
    }
}



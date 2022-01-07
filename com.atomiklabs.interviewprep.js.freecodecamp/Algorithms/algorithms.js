// algorithms.js
// Runs the tests for algorithms exercises

module.exports = {
    runAlgorithms: function () {
        let messages = [];
        messages.push("*** Algorithms ***\n");

        // Symmetric Difference
        messages.push("Symmetric Difference\n");
        let symmetricMessages = require('./symmetricDifference').tests();
        symmetricMessages.forEach(element => messages.push(element));
        messages.push("\n");
        messages.forEach(element => console.log(element));
               
        // Inventory Update
        messages = [];
        messages = ["Inventory Update\n"];
        let inventoryMessages = require('./inventoryUpdate').tests();        
        inventoryMessages.forEach(element => messages.push(element));
        messages.push("\n");
        messages.forEach(element => console.log(element));
    }
}



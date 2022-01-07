// algorithms.js
// Runs the tests for algorithms exercises

module.exports = {
    runAlgorithms: function () {
        console.log("*** Algorithms ***\n");

        // Symmetric Difference
        console.log("Symmetric Difference\n");
        let messages = require('./symmetricDifference').tests();
        messages.forEach(element => console.log(element));
        console.log("\n");
    }
}



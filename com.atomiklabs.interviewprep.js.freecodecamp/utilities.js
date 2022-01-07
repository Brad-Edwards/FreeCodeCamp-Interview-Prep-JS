// utilities.js

module.exports = {
    areEquals: function (arr1, arr2) {
        return areEquals(arr1, arr2);
    }
}

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
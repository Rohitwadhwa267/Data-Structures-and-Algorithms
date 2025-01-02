/**
 * @param {string} str1 - First input string
 * @param {string} str2 - Second input string
 * @return {string} - The greatest common divisor string of str1 and str2
 */
var gcdOfStrings = function (str1, str2) {
    // If concatenating str1 and str2 in both orders does not produce the same result, return an empty string
    if (str1 + str2 !== str2 + str1) return '';
    
    // Get the lengths of str1 and str2
    let a = str1.length;
    let b = str2.length;
    
    // Use the Euclidean algorithm to find the greatest common divisor of the lengths of str1 and str2
    while (b) {
        let temp = b; // Store the current value of b
        b = a % b;    // Update b to be the remainder of a divided by b
        a = temp;     // Update a to be the previous value of b
    }
    
    // Return the substring of str1 from the beginning to the length of the greatest common divisor
    return str1.substring(0, a);
};

console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE")); // Output: ""
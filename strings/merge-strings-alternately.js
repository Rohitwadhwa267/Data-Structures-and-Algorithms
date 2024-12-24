/**
 * Merges two strings alternately character by character.
 *
 * @param {string} word1 - The first string to merge.
 * @param {string} word2 - The second string to merge.
 * @returns {string} The merged string with characters from word1 and word2 alternated.
 */
// merge-strings-alternately

var mergeAlternately = function (word1, word2) {
    // Initialize an empty string to store the result.
    let result = "";
    // Loop through the strings and merge them alternately.
    let i = 0;
    // 
    for (; i < Math.min(word1.length, word2.length); i++) {
        // Append the characters from word1 and word2 alternately.
        result += word1[i] + word2[i];
    }
    // Append the remaining characters from the longer string.
    return result + word1.slice(i) + word2.slice(i);
};

// Example usage:
console.log(mergeAlternately("abc", "pqr")); // Output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // Output: "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // Output: "apbqcd"

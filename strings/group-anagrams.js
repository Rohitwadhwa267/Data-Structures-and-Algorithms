/**
 * @param {string[]} strs - Array of strings to group
 * @return {string[][]} - Grouped anagrams
 */
function groupAnagrams(strs) {
    const res = {};
    for (let s of strs) {
        // Sort the string to use as a key
        const sortedS = s.split('').sort().join('');
        
        // If the key does not exist in the result object, create an array for it
        if (!res[sortedS]) {
            res[sortedS] = [];
        }
        
        // Push the original string into the array corresponding to the sorted key
        res[sortedS].push(s);
    }
    
    // Return the grouped anagrams as an array of arrays
    return Object.values(res);
}

const strs = ["eat", "tan", "ate", "nat", "bat", "tea"];
console.log(groupAnagrams(strs)); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
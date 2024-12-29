var s = "jar", t = "jam";

// Approach: Hash Map
// We can use a hash map to count the frequency of each character in the strings. If the frequency of each character is the same in both strings, then the strings are anagrams of each other.
// Time complexity: O(n + m), where n is the length of the string s and m is the length of the string t. We iterate over both strings to count the frequency of each character.
// Space complexity: O(n + m), where n is the length of the string s and m is the length of the string t. We need O(n + m) space to store the frequency of each character in the strings.
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
        map[t[i]] = (map[t[i]] || 0) - 1;
    }
    for (let key in map) {
        if (map[key] !== 0) return false;
    }
    return true;
};

console.log(isAnagram(s, t)); // Output: false
// longest-substring-without-repeating-characters


class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let seen = new Set();
        let start = 0;
        
        for (let i = 0; i < s.length; i++) {
            while (seen.has(s[i])) {
                seen.delete(s[start]);
                start++;
            }
            
            seen.add(s[i]);
            longest = Math.max(longest, i - start + 1);
        }
        
        return longest;
    }
}
// Example usage:
const solution = new Solution();
console.log(solution.lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(solution.lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(solution.lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(solution.lengthOfLongestSubstring("")); // Output: 0
console.log(solution.lengthOfLongestSubstring(" ")); // Output: 1

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let i = 0;
        let j = s.length - 1;
        while (i < j) {
            if (s[i] !== s[j])
                return false;
            i++;
            j--;
        }
        return true;
    }
}

const solution = new Solution();
// console.log(solution.isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(solution.isPalindrome("race a car")); // false

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const mp = new Map();
        let res = 0;

        for (let num of nums) {
            if (!mp.has(num)) {
                mp.set(num, (mp.get(num - 1) || 0) + (mp.get(num + 1) || 0) + 1);
                mp.set(num - (mp.get(num - 1) || 0), mp.get(num));
                mp.set(num + (mp.get(num + 1) || 0), mp.get(num));
                res = Math.max(res, mp.get(num));
            }
        }
        return res;
    }
}

const solution = new Solution();
// Output: 4
console.log(solution.longestConsecutive([100, 4, 200, 1, 3, 2])); // Test with input [100,4,200,1,3,2]
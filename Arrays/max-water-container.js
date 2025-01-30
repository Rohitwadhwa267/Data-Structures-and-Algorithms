class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                res = Math.max(res, Math.min(heights[i], heights[j]) * (j - i));
            }
        }
        return res;
    }
}

const solution = new Solution();
console.log(solution.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));  // 49
// console.log(solution.maxArea([1, 1]));  // 1

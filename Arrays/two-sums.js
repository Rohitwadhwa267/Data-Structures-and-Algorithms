class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indices = {};  // val -> index

        for (let i = 0; i < nums.length; i++) {
            indices[nums[i]] = i;            
        }


        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];            
            if (indices[diff] !== undefined && indices[diff] !== i) {
                return [i, indices[diff]];
            }
        }

        return [];
    }
}

const solution = new Solution();
console.log(solution.twoSum([2, 17, 11, 7], 9));  // [0, 1]
// console.log(solution.twoSum([3, 2, 4], 6));  // [1, 2]
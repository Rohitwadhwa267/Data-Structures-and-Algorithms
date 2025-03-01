class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const mp = new Map();
        for (let i = 0; i < numbers.length; i++) {
            const tmp = target - numbers[i];
            if (mp.has(tmp)) {
                return [mp.get(tmp), i + 1];
            }
            mp.set(numbers[i], i);
        }
        return [];
    }
}


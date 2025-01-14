class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let minBuy = prices[0];

        for (let sell of prices) {
            maxP = Math.max(maxP, sell - minBuy);            
            minBuy = Math.min(minBuy, sell);            
        }
        return maxP;
    }
}

const solution = new Solution();
console.log(solution.maxProfit([7, 1, 5, 3, 6, 4]));  // 5

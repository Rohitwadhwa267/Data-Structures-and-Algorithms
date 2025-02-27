// jump-game

var array = [2, 3, 1, 1, 4];

var canJump = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (i > max) {
            return false;
        }
        console.log('max :>> ', max, 'i :>> ', i, 'nums[i] :>> ', nums[i]);
        max = Math.max(max, i + nums[i]);
    }
    console.log('Final max :>> ', max);
    return true;
}

// Output: true
console.log(canJump(array)); // Test with input [2,3,1,1,4]
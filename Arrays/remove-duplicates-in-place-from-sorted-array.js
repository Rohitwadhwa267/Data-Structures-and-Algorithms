// remove-duplicates-in-place-from-sorted-array

// by using sets

var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

var uniqueArr = (arr) => [...new Set(arr)];

console.log(uniqueArr(arr)); // [1, 2, 3, 4, 5]



// by using 2 pointers return the length of the array after removing duplicates

var removeDuplicates = (nums) => {
    var i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
console.log(removeDuplicates(arr)); // 5

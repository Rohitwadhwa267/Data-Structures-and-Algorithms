// remove-duplicates-in-place-from-sorted-array

// by using sets

var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

var uniqueArr = (arr) => [...new Set(arr)];

console.log(uniqueArr(arr)); // [1, 2, 3, 4, 5]
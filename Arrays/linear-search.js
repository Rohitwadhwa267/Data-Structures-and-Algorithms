// linear-search
var array = [2, 5, 1, 3, 0];

var target = 8;
// linear search
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
};
// search for the target in the array

console.log(linearSearch(array, target)); // 3
// move-all-zeros-to-the-end-of-the-array

var arr = [1, 0, 2, 0, 3, 0, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0];
var temp = [];
var moveZeros = function(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            temp[count++] = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            temp[count++] = arr[i];
        }
    }
    return temp;
}

console.log(moveZeros(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]



// reverse-a-given-array

var arr = [0 ,1, 2, 3, 4, 5, 6, 8, 9, 10];

const reverseArray = (arr, start, end) => {
    if (start >= end) {
        return;
    } swapArray(start, end);
    reverseArray(arr, start + 1, end - 1);
    return arr;
};

var swapArray = (start, end) => {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

console.log(reverseArray(arr, 0, arr.length - 1)); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
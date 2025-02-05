// bubble sort
var arr = [5, 3, 4, 6, 1, 2];

// bubble sort function
function BubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++)
            if (arr[j] > arr[j + 1])
                Swap(arr, j, j + 1);
    }
    return arr;
}

// swap function
function Swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(BubbleSort(arr));
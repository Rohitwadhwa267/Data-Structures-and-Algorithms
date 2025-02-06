// insertion-sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(arr, j, j - 1); j--;
        }
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

const arr = [5, 3, 4, 6, 1, 2, 20];
insertionSort(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6]
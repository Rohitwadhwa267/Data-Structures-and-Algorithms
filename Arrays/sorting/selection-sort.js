// Selection sort

var arr = [3, 4, 6, 2, 1, 5];

// selection sort function
function SelectionSort(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[i] < arr[j])
                swap(arr , i, j);
        }
    }
    return arr;
}
// swap function
function swap(arr,i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(SelectionSort(arr));
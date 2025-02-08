
function findLargestElement(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

const arr1 = [2, 5, 1, 3, 0];
let max = findLargestElement(arr1);
console.log("The largest element in the array is: " + max);

const arr2 = [8, 10, 5, 7, 9];
max = findLargestElement(arr2);
console.log("The largest element in the array is: " + max);


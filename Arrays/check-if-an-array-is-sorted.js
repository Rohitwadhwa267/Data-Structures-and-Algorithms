// check-if-an-array-is-sorted
function checkIfArrayIsSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

const arr = [1, 2, 3, 4, 5];
const result = checkIfArrayIsSorted(arr);
console.log(result); // true

const arr2 = [1, 2, 3, 5, 4];
const result2 = checkIfArrayIsSorted(arr2);
console.log(result2); // false
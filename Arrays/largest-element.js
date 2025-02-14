
/**
 * Function to find the largest element in an array
 * @param {Array} arr The array to search through
 * @returns {Number} The largest element in the array
 */
function findLargestElement(arr) {
    // start with the first element as the current max
    let max = arr[0];
    // loop through the array starting with the second element
    for (let i = 0; i < arr.length; i++) {
        // if the current element is greater than the current max, update max
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    // return the max element
    return max;
}

const arr1 = [2, 5, 1, 3, 0];
let max = findLargestElement(arr1);
console.log("The largest element in the array is: " + max);

const arr2 = [8, 10, 5, 7, 9];
max = findLargestElement(arr2);
console.log("The largest element in the array is: " + max);


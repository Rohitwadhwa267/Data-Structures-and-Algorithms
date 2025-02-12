// rotate-array-by-k-elements

var arr = [1, 2, 3, 4, 5];
var rotation = 3;

const rotateArrayNTimes = (array, n) => {
    while (n-- !== 0) {
        const firstElement = array[0];
        for (let i = 0; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
        array[array.length - 1] = firstElement;
    }
    return array;
}

console.log(rotateArrayNTimes(arr, rotation)); // [4, 5, 1, 2, 3]

// left-rotate-the-array-by-one

var arr = [1, 2, 3, 4, 5];

const leftRotateByOne = (array) => {
    const firstElement = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array[array.length - 1] = firstElement;
    return array;
}

console.log(leftRotateByOne(arr)); // [2, 3, 4, 5, 1]

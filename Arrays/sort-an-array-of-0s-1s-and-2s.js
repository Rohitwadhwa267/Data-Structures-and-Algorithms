// sort-an-array-of-0s-1s-and-2s

var array = [0, 1, 2, 0, 1, 2];
var sortArray = (arr) => {
    var c0 = 0, c1 = 0, c2 = 0;
    array.forEach((num) => {
        if (num === 0)
            c0++;
        else if (num === 1)
            c1++;
        else
            c2++;

    });
    for (let i = 0; i < c0; i++)
        arr[i] = 0;
    for (let i = c0; i < c0 + c1; i++)
        arr[i] = 1;
    for (let i = c0 + c1; i < c0 + c1 + c2; i++)
        arr[i] = 2;

    return arr;
}

console.log(sortArray(array)); // [0, 0, 1, 1, 2, 2]
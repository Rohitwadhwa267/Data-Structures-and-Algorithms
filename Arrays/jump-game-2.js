// Jump game 2

var array = [2, 3, 1, 1, 4];

var jump = (array) => {
    var jump = 0;
    var currentEnd = 0;
    var max = 0;
    for (let i = 0; i < array.length - 1; i++) {
        max = Math.max(max, i + array[i]);
        if (i === currentEnd) {
            ++jump;
            currentEnd = max;
        }
    }
    return jump;
}

// Output: 2
console.log(jump(array)); // Test with input [2,3,1,1,4]
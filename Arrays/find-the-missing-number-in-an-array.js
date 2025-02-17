// find-the-missing-number-in-an-array
var array = [1,2,3,4,5,7];

const findMissingNumber2 = (arr) => {
    const summation = (arr.length + 1) * (arr.length + 2) / 2;
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return summation - sum;
}

console.log(findMissingNumber2(array)); // 6
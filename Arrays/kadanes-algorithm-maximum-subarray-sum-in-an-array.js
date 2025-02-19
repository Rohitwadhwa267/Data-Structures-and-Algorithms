// kadanes-algorithm-maximum-subarray-sum-in-an-array


var array = [1, 2, 3, -4, 5, 6, -7, 8, 9, -10];

var maxSubArraySum = (arr) => {
    var max = Number.MIN_VALUE;
    var sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
        }

        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}

console.log(maxSubArraySum(array)); // 21


// // kadanes-algorithm-maximum-subarray-sum-in-an-array returns  subarray 


var array2 = [-2,1,-3,4,-1,2,1,-5,4] ;

var maxSubArray = (arr) => {
    var max = Number.MIN_VALUE;
    var sum = 0;
    var start = 0;
    var end = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
            end = i;
        }

        if (sum < 0) {
            sum = 0;
            start = i + 1; // reset start index
        }
    }
    return arr.slice(start, end + 1);
}

console.log(maxSubArray(array2)); // 21



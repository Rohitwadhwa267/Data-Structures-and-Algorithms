// rearrange-array-elements-by-sign

var array = [1, 2, -4, -5];


var rearrangeArray = (arr) => {

    let i = 0;
    let j = 0;
    var result = [];
    while (i < arr.length && j < arr.length) {
        if (arr[i] < 0) {
            result.push(arr[i]);
            i++;
        }
        else if (arr[j] >= 0) {
            result.unshift(arr[j]);
            j++;
        }
        if (result.length == 0) {
            result.push(arr[j]);
            j++;
        }
    }
    return result;
}
    ;
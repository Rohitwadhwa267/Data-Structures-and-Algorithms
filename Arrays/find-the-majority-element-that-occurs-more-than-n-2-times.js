// find-the-majority-element-that-occurs-more-than-n-2-times

var array = [4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3, 4, 4, 3, 2, 4];

// find the majority element that occurs more than n/2 times
var findMajorityElement = (arr) => {
    var map = {};
    for (let i = 0; i < arr.length; i++)
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    for (let key in map) {
        if (map[key] > arr.length / 2)
            return key;
    }
}

console.log(findMajorityElement(array)); // 4
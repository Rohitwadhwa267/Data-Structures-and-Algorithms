// find-the-majority-element-that-occurs-more-than-n-2-times

var array = [11,33,33,11,33,11];
    
// find the majority element that occurs more than n/3 times
var findMajorityElement = (arr) => {
    var map = {};
    var returnArray     = [];
    for (let i = 0; i < arr.length; i++)
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    for (let key in map) {
        if (map[key] > arr.length / 3) {
            returnArray.push(key);
        }
    }
    return returnArray;
}

var ans = findMajorityElement(array);
console.log("The majority elements are: " + ans.join(" "));

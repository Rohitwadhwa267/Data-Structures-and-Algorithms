class binarySearch {
    binarySearch(arr, target) {
        let start = 0;
        let end = arr.length - 1;
        let mid;
        while (start <= end) {
            mid = Math.floor((start + end) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;  
    }
}       
const solution = new binarySearch();
console.log(solution.binarySearch([1, 3, 5, 7, 9], 3));  // 1
console.log(solution.binarySearch([1, 3, 5, 7, 9], 4));  // -1
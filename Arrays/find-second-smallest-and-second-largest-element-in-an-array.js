// find-second-smallest-and-second-largest-element-in-an-array

function findSecondSmallestAndSecondLargestElement(arr) {
    if (arr.length < 2) {
        return;
    }

    let smallest = arr[0];
    let secondSmallest = arr[0];
    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }

        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return [secondSmallest, secondLargest];
}

const arr = [5, 3, 4, 6, 1, 2, 20];
const result = findSecondSmallestAndSecondLargestElement(arr);
console.log(result); // [2, 6]

function bucketSort(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }

    // Step 1: Find the range of the numbers
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    const bucketCount = maxValue - minValue + 1; // Number of buckets = range of numbers

    // Step 2: Create buckets
    const buckets = Array.from({ length: bucketCount }, () => []);

    // Step 3: Distribute elements into buckets
    for (let num of arr) {
        const bucketIndex = num - minValue; // Calculate bucket index
        buckets[bucketIndex].push(num);
    }

    // Step 4: Concatenate buckets into a sorted array
    const sortedArray = [];
    for (let bucket of buckets) {
        sortedArray.push(...bucket); // Add all elements from each bucket
    }

    return sortedArray;
}

// Example Usage
const arr = [1, 2, 2, 3, 3, 3,0];
const sortedArr = bucketSort(arr);
console.log("Sorted Array:", sortedArr);

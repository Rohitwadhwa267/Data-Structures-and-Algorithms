var array = [1, 2, -4, -5];

var rearrangeArray = (arr) => {
    let positives = [];
    let negatives = [];
    
    // Separate positives and negatives
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negatives.push(arr[i]);
        } else {
            positives.push(arr[i]);
        }
    }

    let result = [];
    let i = 0, j = 0;
    
    // Alternate between positive and negative values
    while (i < positives.length || j < negatives.length) {
        if (i < positives.length) {
            result.push(positives[i]);
            i++;
        }
        if (j < negatives.length) {
            result.push(negatives[j]);
            j++;
        }
    }

    return result;
}

console.log(rearrangeArray(array)); 
// Output: [1, -4, 2, -5]

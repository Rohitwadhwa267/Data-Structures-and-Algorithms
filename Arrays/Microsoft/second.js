function solution(A, R) {
    const N = A.length;
    let maxTypes = 0; // maximum number of unique items that can be placed on the shelves

    // Traverse through all possible starting points for the R consecutive shelves
    for (let start = 0; start <= N - R; start++) {
        const remainingItems = new Set();

        // Consider items up to the starting point
        for (let i = 0; i < start; i++) {
            remainingItems.add(A[i]);
        }

        // Skip R shelves
        for (let i = start + R; i < N; i++) {
            remainingItems.add(A[i]);
        }

        // Update maxTypes with the size of remaining items
        maxTypes = Math.max(maxTypes, remainingItems.size);
    }

    return maxTypes;
}


// call this function to test the above implementation

    const A = [1, 100000,1];
    const R = 3;
    console.log(maxUniqueItemsAfterRemovingShelves(A, R)); // 8ṇ
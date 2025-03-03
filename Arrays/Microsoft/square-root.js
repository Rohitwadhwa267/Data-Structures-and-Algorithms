// square-root

var number  = 16;
function mySqrt(n) {
    // Handle edge cases
    if (n === 0 || n === 1) {
        return n;
    }

    let left = 0, right = n;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midSquared = mid * mid;

        if (midSquared === n) {
            return mid;  // Exact square root
        } else if (midSquared < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // When left > right, the floor of the square root will be right
    return right;
}

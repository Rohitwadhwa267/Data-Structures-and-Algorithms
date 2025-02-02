// sum-of-first-n-natural-numbers
var sum = 0;
var n = 5;
var sumOfFirstNNaturalNumbers = function (number) {
    if (number === 0)
        return 0;
    return number + sumOfFirstNNaturalNumbers(number - 1);
}

console.log(sumOfFirstNNaturalNumbers(n)); // 15

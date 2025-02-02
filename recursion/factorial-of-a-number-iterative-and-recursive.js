// factorial-of-a-number-iterative-and-recursive

var factorial = 1;
var n = 15;
var factorialOfANumber = function (number) {
    if (number === 0)
        return 1;
    return number * factorialOfANumber(number - 1);
}

console.log(factorialOfANumber(n)); // 120
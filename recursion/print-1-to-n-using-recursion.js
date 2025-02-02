// print-1-to-n-using-recursion

var n = 5;
var print1ton = (n) => {
    if (n === 0)
        return;
    console.log(n);
    print1ton(n - 1);
}

print1ton(n); // 5 4 3 2 1
// print-name-n-times-using-recursion

var name = "Rohit";
var n = name.length;

var printName = function (name, n) {
    if (n === 0) {
        return;
    }
    console.log(name);
    printName(name, n - 1);
};

printName(name, n); // Rohit Rohit Rohit Rohit Rohit

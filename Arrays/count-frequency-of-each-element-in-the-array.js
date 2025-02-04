// count-frequency-of-each-element-in-the-array
var arr = [10, 5, 10, 15, 10, 5];
// create hashmap
var map = {};
// iterate over the array and populate the hashmap
arr.forEach(e => {
    map[e] = (map[e] || 0) + 1;
});

// print the hashmap
console.log(map); // { '5': 2, '10': 3, '15': 1 }

// find-the-highest-lowest-frequency-element
var arr = [10, 5, 10, 15, 10, 5];

// create hashmap
var map = {};

// iterate over the array and populate the hashmap
arr.forEach(e => {
    map[e] = (map[e] || 0) + 1;
});

// find the highest frequency
var max = Math.max(...Object.keys(map));

// find the lowest frequency
var min = Math.min(...Object.keys(map));

// print the result
console.log(`The highest frequency is ${max} and the lowest frequency is ${min}`);

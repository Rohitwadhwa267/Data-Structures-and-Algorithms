// find-the-repeating-and-missing-numbers

var array = [3,1,2,5,4,6,7,5];

var map = {};
for (let i = 0; i < array.length; i++) {
    map[i + 1] = 0;
}

for (let i = 0; i < array.length; i++) {
    map[array[i]] = (map[array[i]] || 0) + 1;
}

for (let key in map) {
    if (map[key] === 0) {
        console.log("Missing element is: " + key);
    }
    if (map[key] > 1) {
        console.log("Repeating element is: " + key);
    }
}
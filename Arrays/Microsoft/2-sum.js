// 2 sum 

var array = [1,3,3,4];
var target = 5;

var twoSum = ()=>{
// craete a hash map 
var mapp = new Map();
for (let i = 0; i < array.length; i++) {
    const diff = target - array[i];
    if (mapp.has(diff)) {
        return [ mapp.get(diff), i]
    }
    mapp.set(array[i],i);
}
return 0;
}

// call this here 

var result =  twoSum();
console.log(result);

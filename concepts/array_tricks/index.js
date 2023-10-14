// create range of numbers
const arr = Array(100).fill(0).map((_, i) => i + 1);
console.log(arr); // [ 1, 2, ( . . . ) 99, 100 ]

const arr2 = [...Array(100).keys()];
console.log(arr2); // [ 0, 1, ( . . . ) 99, 100 ]

// remove duplicates from array 
const unique = [...new Set(arr)];
console.log(unique); // [ 1, 2, ( . . . ) 99, 100 ]

// get random element
const random = arr[Math.floor(Math.random() * arr.length)];
console.log(random); // random number (between 1 and 100)

// loop over key-value pair
for(const [i, val] of arr.entries()) {
    console.log(i, val);
    /*
    0 1
    1 2
    ( . . . )
    98 99
    99 100
    */
}

// other array methods
/*
arr.forEach();
arr.map()
arr.filter();
arr.find();
arr.findIndex();
arr.reduce();
*/

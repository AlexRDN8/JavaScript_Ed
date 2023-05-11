/*
Write a function called findUnique which returns the only unique number from an array.

All numbers in the unsorted array are present twice, except the one you have to find. 
The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. 
The array contains at least one number and may contain millions of numbers. 
So make sure your solution is optimized for speed.

Example
Input:

[ 1, 8, 4, 4, 6, 1, 8 ]
Expected output:

6
*/

function findUnique(numbers) {
    const object = {};
    for (const num of numbers) {
        // if(object[num] === undefined){
        //     object[num] = 0;
        // }
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
        object[num] ??= 0; //
        // object[num] = object[num] ?? 0;
        object[num] += 1;
    }
    // return +Object.keys(object).find(key => object[key] === 1);
    for (const key in object) {
        if (object[key] === 1) {
            return Number(key);
        }
    }
    // const sortedArray = numbers.sort()
    // for (let i = 0; i < sortedArray.length; i+=2) {
    //     if (sortedArray[i] != sortedArray[i + 1]){
    //         return sortedArray[i]
    //     }
    // }
}

console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ])) 




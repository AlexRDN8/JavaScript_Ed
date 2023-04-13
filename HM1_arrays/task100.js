/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/


const array = [1,2,3,4,5];
function positiveSum(arr) {
    return arr.reduce((sum, current) => current > 0 ? sum + current : sum, 0);
}
console.log(positiveSum(array));
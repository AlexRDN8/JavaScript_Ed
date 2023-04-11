/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!

You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
*/


function getLengthOfMissingArray(arrayOfArrays){
    function compare(a, b) {
        return a.length - b.length;
      }
    const arr = arrayOfArrays.sort(compare);
    if (arr.length == 0){
        return 0;
    }
    for (let i = 1; i < arr.length; i++){
        if (arr[i - 1].length == 0){
            return 0;
        }    
        else if (arr[i].length - arr[i - 1].length != 1){
            return arr[i].length - 1;
        }   
    }
}
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));
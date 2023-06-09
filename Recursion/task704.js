/*
Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. 
But be careful, some of your arguments can be arrays of numbers or nested arrays.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21
*/

smartSum([1]);

function smartSum(...args){ // args === [[1]]   args === [1]
    //console.log(args)
    let sum = 0;
    for (let element of args) {
        if(typeof element === "number"){
            sum += element
        }else{
            // element === [1]
            sum += smartSum(...element) // почему здесь нужно писать именно ...?
        }
    }
    return sum
}
console.log(smartSum(1,2,3,[4,5],6))
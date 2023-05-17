/*
The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. 
The first sequence contains all the elements of the argument sequence up to the item 
that caused the first failure of the predicate. 
The second returned sequence contains the rest of the original sequence. The original sequence is not modified.

For example,


function isEven (x) {
  return Math.abs(x) % 2 === 0;
}

var arr = [2,4,6,1,8,10];

// This is true
span(arr, isEven) === [[2,4,6],[1,8,10]]
*/
function span(arr, predicate) { 
    const indexOfFailure = arr.findIndex(num => predicate(num) === false);
    if(indexOfFailure !== -1){
        return [arr.slice(0,indexOfFailure), arr.slice(indexOfFailure)]
    }else{
        return [arr, []]
    }    
}


//Условия:
// function isEven (x) {
//     return Math.abs(x) % 2 === 0;
// }  
// var arr = [2,4,6,1,8,10]; 
function isOdd(x) {
    return Math.abs(x) % 2 !== 0;
}
var arr3 = [13,17,19,11,21];


// This is true
//console.log(span(arr, isEven) === [[2,4,6],[1,8,10]])
console.log(span(arr3, isOdd)) //=== [ [ 13, 17, 19, 11, 21 ], [] ])
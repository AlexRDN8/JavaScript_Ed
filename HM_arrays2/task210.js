/*
Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
Return -1 if there is no such index.

Your algorithm should be very performant.

[input] array of integers ( with 0-based nonnegative indexing )
[output] integer

Examples:
input: [-8,0,2,5]
output: 2 # since array[2] == 2

input: [-1,0,3,6]
output: -1 # since no index in array satisfies array[index] == index
Random Tests Constraints:
Array length: 200 000

Amount of tests: 1 000

Time limit: 150 ms
*/

function indexEqualsValue(a) {
   return a.findIndex((number, index) => number === index);  //медленно
  }
// Не проходит проверку, так как работает медленно.  
console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]));